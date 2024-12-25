# React + TypeScript + Vite

To jest prosty projekt postawiony lokalnie bez wchodzenia na GitHuba i Vercela


## Konfiguracja CLI Vercel

1. Zainstaluj CLI Vercel:
````bash
  npm install -g vercel
````
2. Zaloguj się do Vercel:
````bash
  vercel login
````
CLI automatycznie stworzy projekt na Vercel, bez potrzeby integracji z GitHubem.

3. W katalogu z projektem ustaw -> Automatyczna publikacja projektu na Vercel
````bash
  vercel --prod
````
lub jak chcesz aby pytan 
````bash
  vercel deploy --prod --yes
````


## Konfiguracja Vite
1. Zainstaluj Vite globalnie
````bash
  npm install -g create-vite
````