# React + TypeScript + Vite

To jest prosty projekt postawiony lokalnie bez wchodzenia na GitHuba i Vercela

## Konfiguracja CLI Vercel

1. Zainstaluj CLI Vercel:

```bash
  npm install -g vercel
```

2. Zaloguj się do Vercel:

```bash
  vercel login
```

CLI automatycznie stworzy projekt na Vercel, bez potrzeby integracji z GitHubem.

3. W katalogu z projektem ustaw -> Automatyczna publikacja projektu na Vercel

```bash
  vercel --prod
```

lub jak chcesz aby pytan

```bash
  vercel deploy --prod --yes
```

## Konfiguracja Vite

1. Zainstaluj Vite globalnie

```bash
  npm install -g create-vite
```

Uwaga podczas konfiruracji mozna robic deploya ktory jest wypychany do repo oraz kodu pisanego lokalnie :D
Taka opcja moze sie przydac w perwnych okolicznosciach.



## Setup nowego projektu na podstawie tego repozytorium
1. Na stronie tego repo
2. https://github.com/aleksanderjedynak/basic/actions/workflows/create_new_project.yml
3. Wybierz "Run workflow" i podaj nazwe
4. Repo jest zrobione
5. Teraz poberz repo 
6. odpal w repo
```bash
  vercel login
```
7. potem to
```bash
  vercel deploy --prod --yes
```
8. Masz setup projektu i mozesz sobie dalej pracowac :) 

# Plany na rozbudowe:
1. Dodanie testow

# Plany na rozbudowe:
1. Dodanie testow


# Testowanie lokalnie 

1. musisz miec zainstalowane Vercel CLI i wystarczy odpalic komende
```bash
   vercel dev
```
