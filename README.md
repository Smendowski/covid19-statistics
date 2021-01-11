# covid19-statistics
Project repository for DB classes. 

## Known unresolved questions
- [ ] Decide on APIs being used and add them to the README
- [ ] Decide on how React is going to get its data: via *Python API* or *React Connector* 

## Guide for SSH tunnel
1. PyCharm Professional is needed 
</br>
2. Go to View > Tool Windows > Database.
</br>
3. Click '+' > MySQL > SSH/SSL
</br>
4. Fill in the form as below:

![alt text](https://github.com/mmuravytskyi/covid19-statistics/blob/main/readme/SSHtun.png)


## Server - versions
```bash
[g01@bazy ~]$ python --version
Python 3.6.8
[g01@bazy ~]$ npm --version
6.14.4
[g01@bazy ~]$ node --version
v10.21.0
[g01@bazy ~]$ git --version
git version 2.27.0
```

### NVM - Node Version Manager
1. Download, extract and install [Node Version Manager](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)
2. Run nvm.exe in the choosed location.
3. Check *Node Version Manager's* verison:
```powershell
PS C:\nvm>nvm version
1.1.7
```
4. Check current *NodeJS* version installed locally
```powershell
PS C:\nvm> node --version
v12.18.4
```
5. As a workaround, copy *settings.txt* file to the *C:/* root location.

6. NodeJS version should coincide with the version on the server.
```powershell
PS C:\nvm>nvm install v10.21.0
Downloading node.js version 10.21.0 (64-bit)...
Complete
Creating C:\nvm\temp

Downloading npm version 6.14.4... Complete
Installing npm v6.14.4...

Installation complete. If you want to use this version, type

nvm use 10.21.0
```

7. Check every NodeJS version available locally that is under control of *Node Version Manager*
```powershell
PS C:\nvm>nvm list
    10.21.0
```
8. Switch to the *10.21.0* version.
```powershell
PS C:\nvm>nvm use 10.21.0
Now using node v10.21.0 (64-bit)
```

```powershell
PS C:\nvm> nvm ls
  * 10.21.0 (Currently using 64-bit executable)
```
9. NodeJS version has been globally switched (compare to the result from 4th point)
```powershell
PS C:\WINDOWS\system32> node --version
v10.21.0
```

10. Make sure that nvm commands works both on PowerShell, cmd and Linux Terminal. Sometimes, nvm reinstallation may be required.


### Frontend - ReactJS
```powershell
PS Success! Created frontend at C:\Dev\covid19-statistics\frontend
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  npm start
```

```powershell
PS C:\Dev\covid19-statistics\frontend> npm start
```

Starting the developement server:

```node
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.56.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```