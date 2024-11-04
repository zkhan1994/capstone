# What to do
Link to the website -> https://halo-vma-capstone.web.app

```bash
npm install -g firebase-tools
```
- Downloads the tools required to deploy the project


```bash
firebase login
```
- Logs in your google account associated with the project to access the tools
- May need to run `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope Process` on Windows


```bash
firebase init
```
- Probably unnecessary, skip (was required with initial project setup but now it is set up in GitHub)


```bash
firebase deploy --only hosting:halo-vma
```
- Deploys the app to the website hosted by Firebase