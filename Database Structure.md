## Tabela: Users
- **id** (PK)
- **name**
- **email**
- **password**
- **created_at**
- **updated_at**

## Tabela: Groups
- **id** (PK)
- **name**
- **created_at**
- **updated_at**

## Tabela: User_Group
- **id** (PK)
- **user_id** (FK - Users.id)
- **group_id** (FK - Groups.id)
- **created_at**
- **updated_at**

## Tabela: Projects
- **id** (PK)
- **name**
- **description**
- **group_id** (FK - Groups.id)
- **created_at**
- **updated_at**

## Tabela: Tasks
- **id** (PK)
- **name**
- **description**
- **status**
- **due_date**
- **project_id** (FK - Projects.id)
- **user_id** (FK - Users.id) -- para tarefas individuais
- **group_id** (FK - Groups.id) -- para tarefas em grupo
- **created_at**
- **updated_at**

## Tabela: Permissions
- **id** (PK)
- **name**
- **created_at**
- **updated_at**

## Tabela: User_Group_Permission
- **id** (PK)
- **user_id** (FK - Users.id)
- **group_id** (FK - Groups.id)
- **permission_id** (FK - Permissions.id)
- **created_at**
- **updated_at**
