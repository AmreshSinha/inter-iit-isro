Ensure that the system is Linux based with xsmgenspec and xsmcomputeflex installed. Follow the following steps for installation of xsmdas:
### Prerequisites for xsmdas
1. OS: Linux/Unix (CentOS 7.0+, Ubuntu 14.04+, RHEL 6.5+, Fedora 20.0+, SLED 11.0+,
OS X 10.13+)
2. Compiler: gcc 4.4+

### Steps for xsmdas installation
1. Download the installation package of XSMDAS and CALDB from https://pradan.issdc.gov.
in/pradan/
2. Unzip the installation package ch2_xsmdas_yyyymmdd_vn.mm.zip to desired directory:
``` 
unzip ch2_xsmdas_yyyymmdd_vn.mm.zip

```
3. Set environmental variables by adding following lines to ~/.bashrc
```
export xsmdas= <path to xsmdas directory>/xsmdas
export PATH="$xsmdas/bin:$xsmdas/scripts:$PATH"
export LD_LIBRARY_PATH="$xsmdas/lib/":$LD_LIBRARY_PATH
export PFILES="$PFILES:$xsmdas/pfiles"

```
here <path to xsmdas directory> to be replaced with the absolute path under which
xsmdas directory is present
source ~/.bashrc file as

### Installation
## For Backend
Install Python dependencies 
``` bash
$ pip3 install -r requirements.txt
```

Start the development server by running 
``` bash
# dev server with hot reload at http://localhost:8080
$ python app.py
```
## For Frontend

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 

# if you use Node 17+ use this command instead of `npm start`
$ npm run start:n17 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start

# if you use Node 17+ use this command instead of `yarn start`
$ yarn start:n17 
```

