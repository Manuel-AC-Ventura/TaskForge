<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AccountController extends Controller
{
    public function update(Request $request){
        $request->validate([
            'name' => 'sometimes|string',
            'email' => 'sometimes|string|email|unique:users,email,' . $request->user()->id,
            'password' => 'nullable|string|confirmed',
        ]);

        $user = $request->user();

        if ($request->has('name')) {
            $user->name = $request->name;
        }

        if ($request->has('email') && $request->email !== $user->email) {
            $user->email = $request->email;
        }

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return back()->with('success', 'Account updated successfully.');
    }
}
