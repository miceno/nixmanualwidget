/******************************************************************************
 *                              *NIX manual 2.2
 *****************************************************************************/
/******************************************************************************
 * Eben Eliason, http://www.interdimensionmedia.com					11/26/2007
 * Orestes Sanchez, http://blog.estotienearreglo.es                 12/26/2014
 *****************************************************************************/

name = "nixmanual";
version = "2.2";
var debugMode = false;

/*
Uncomment this block for testing on a browser, since CORS limits access to
external domains

    var testResponseText = '<input name="apropos" value="0" type="radio" checked="checked" /> <a href="/cgi/man.cgi?query=man&amp;sektion=1&amp;apropos=0">Man</a>\
    <select name="sektion">\
    <option value="0">All Sections</option>\
    <option value="1">1 - General Commands</option>\
    <option value="2">2 - System Calls</option>\
    <option value="3">3 - Subroutines</option>\
    <option value="4">4 - Special Files</option>\
    <option value="5">5 - File Formats</option>\
    <option value="6">6 - Games</option>\
    <option value="7">7 - Macros and Conventions</option>\
    <option value="8">8 - Maintenance Commands</option>\
    <option value="9">9 - Kernel Interface</option>\
    <option value="n">n - New Commands</option>\
    </select>\
    <select name="manpath">\
    <option value="2.8 BSD">2.8 BSD</option>\
    <option value="2.9.1 BSD">2.9.1 BSD</option>\
    <option value="2.10 BSD">2.10 BSD</option>\
    <option value="2.11 BSD">2.11 BSD</option>\
    <option value="4.3BSD NET/2">4.3BSD NET/2</option>\
    <option value="4.3BSD Reno">4.3BSD Reno</option>\
    <option value="4.4BSD Lite2">4.4BSD Lite2</option>\
    <option value="386BSD 0.0">386BSD 0.0</option>\
    <option value="386BSD 0.1">386BSD 0.1</option>\
    <option value="CentOS 5.9">CentOS 5.9</option>\
    <option value="CentOS 5.10">CentOS 5.10</option>\
    <option value="CentOS 5.11">CentOS 5.11</option>\
    <option value="CentOS 6.4">CentOS 6.4</option>\
    <option value="CentOS 6.5">CentOS 6.5</option>\
    <option value="CentOS 6.6">CentOS 6.6</option>\
    <option value="CentOS 7.0">CentOS 7.0</option>\
    <option value="CentOS Linux/amd64 5.6">CentOS Linux/amd64 5.6</option>\
    <option value="CentOS Linux/amd64 5.7">CentOS Linux/amd64 5.7</option>\
    <option value="CentOS Linux/amd64 5.8">CentOS Linux/amd64 5.8</option>\
    <option value="CentOS Linux/amd64 6.0">CentOS Linux/amd64 6.0</option>\
    <option value="CentOS Linux/amd64 6.1">CentOS Linux/amd64 6.1</option>\
    <option value="CentOS Linux/amd64 6.2">CentOS Linux/amd64 6.2</option>\
    <option value="CentOS Linux/amd64 6.3">CentOS Linux/amd64 6.3</option>\
    <option value="CentOS Linux/i386 3.9">CentOS Linux/i386 3.9</option>\
    <option value="CentOS Linux/i386 4.8">CentOS Linux/i386 4.8</option>\
    <option value="CentOS Linux/i386 5.4">CentOS Linux/i386 5.4</option>\
    <option value="CentOS Linux/i386 5.5">CentOS Linux/i386 5.5</option>\
    <option value="Darwin 1.3.1/x86">Darwin 1.3.1/x86</option>\
    <option value="Darwin 1.4.1/x86">Darwin 1.4.1/x86</option>\
    <option value="Darwin 6.0.2/x86">Darwin 6.0.2/x86</option>\
    <option value="Darwin 7.0.1">Darwin 7.0.1</option>\
    <option value="Darwin 8.0.1/ppc">Darwin 8.0.1/ppc</option>\
    <option value="Debian 6.0.10">Debian 6.0.10</option>\
    <option value="Debian 7.7.0">Debian 7.7.0</option>\
    <option value="FreeBSD 1.0-RELEASE">FreeBSD 1.0-RELEASE</option>\
    <option value="FreeBSD 1.1-RELEASE">FreeBSD 1.1-RELEASE</option>\
    <option value="FreeBSD 1.1.5.1-RELEASE">FreeBSD 1.1.5.1-RELEASE</option>\
    <option value="FreeBSD 2.0-RELEASE">FreeBSD 2.0-RELEASE</option>\
    <option value="FreeBSD 2.0.5-RELEASE">FreeBSD 2.0.5-RELEASE</option>\
    <option value="FreeBSD 2.1.0-RELEASE">FreeBSD 2.1.0-RELEASE</option>\
    <option value="FreeBSD 2.1.5-RELEASE">FreeBSD 2.1.5-RELEASE</option>\
    <option value="FreeBSD 2.1.6.1-RELEASE">FreeBSD 2.1.6.1-RELEASE</option>\
    <option value="FreeBSD 2.1.7.1-RELEASE">FreeBSD 2.1.7.1-RELEASE</option>\
    <option value="FreeBSD 2.2.1-RELEASE">FreeBSD 2.2.1-RELEASE</option>\
    <option value="FreeBSD 2.2.2-RELEASE">FreeBSD 2.2.2-RELEASE</option>\
    <option value="FreeBSD 2.2.5-RELEASE">FreeBSD 2.2.5-RELEASE</option>\
    <option value="FreeBSD 2.2.6-RELEASE">FreeBSD 2.2.6-RELEASE</option>\
    <option value="FreeBSD 2.2.7-RELEASE">FreeBSD 2.2.7-RELEASE</option>\
    <option value="FreeBSD 2.2.8-RELEASE">FreeBSD 2.2.8-RELEASE</option>\
    <option value="FreeBSD 2.2.8-RELEASE and Ports">FreeBSD 2.2.8-RELEASE and Ports</option>\
    <option value="FreeBSD 3.0-RELEASE">FreeBSD 3.0-RELEASE</option>\
    <option value="FreeBSD 3.1-RELEASE">FreeBSD 3.1-RELEASE</option>\
    <option value="FreeBSD 3.2-RELEASE">FreeBSD 3.2-RELEASE</option>\
    <option value="FreeBSD 3.3-RELEASE">FreeBSD 3.3-RELEASE</option>\
    <option value="FreeBSD 3.4-RELEASE">FreeBSD 3.4-RELEASE</option>\
    <option value="FreeBSD 3.4-RELEASE and Ports">FreeBSD 3.4-RELEASE and Ports</option>\
    <option value="FreeBSD 3.5-RELEASE and Ports">FreeBSD 3.5-RELEASE and Ports</option>\
    <option value="FreeBSD 3.5.1-RELEASE">FreeBSD 3.5.1-RELEASE</option>\
    <option value="FreeBSD 3.5.1-RELEASE and Ports">FreeBSD 3.5.1-RELEASE and Ports</option>\
    <option value="FreeBSD 4.0-RELEASE">FreeBSD 4.0-RELEASE</option>\
    <option value="FreeBSD 4.1-RELEASE">FreeBSD 4.1-RELEASE</option>\
    <option value="FreeBSD 4.1.1-RELEASE">FreeBSD 4.1.1-RELEASE</option>\
    <option value="FreeBSD 4.1.1-RELEASE and Ports">FreeBSD 4.1.1-RELEASE and Ports</option>\
    <option value="FreeBSD 4.2-RELEASE">FreeBSD 4.2-RELEASE</option>\
    <option value="FreeBSD 4.2-RELEASE and Ports">FreeBSD 4.2-RELEASE and Ports</option>\
    <option value="FreeBSD 4.3-RELEASE">FreeBSD 4.3-RELEASE</option>\
    <option value="FreeBSD 4.3-RELEASE and Ports">FreeBSD 4.3-RELEASE and Ports</option>\
    <option value="FreeBSD 4.4-RELEASE">FreeBSD 4.4-RELEASE</option>\
    <option value="FreeBSD 4.5-RELEASE">FreeBSD 4.5-RELEASE</option>\
    <option value="FreeBSD 4.5-RELEASE and Ports">FreeBSD 4.5-RELEASE and Ports</option>\
    <option value="FreeBSD 4.6-RELEASE">FreeBSD 4.6-RELEASE</option>\
    <option value="FreeBSD 4.6-RELEASE and Ports">FreeBSD 4.6-RELEASE and Ports</option>\
    <option value="FreeBSD 4.6.2-RELEASE">FreeBSD 4.6.2-RELEASE</option>\
    <option value="FreeBSD 4.6.2-RELEASE and Ports">FreeBSD 4.6.2-RELEASE and Ports</option>\
    <option value="FreeBSD 4.7-RELEASE">FreeBSD 4.7-RELEASE</option>\
    <option value="FreeBSD 4.8-RELEASE">FreeBSD 4.8-RELEASE</option>\
    <option value="FreeBSD 4.8-RELEASE and Ports">FreeBSD 4.8-RELEASE and Ports</option>\
    <option value="FreeBSD 4.9-RELEASE">FreeBSD 4.9-RELEASE</option>\
    <option value="FreeBSD 4.9-RELEASE and Ports">FreeBSD 4.9-RELEASE and Ports</option>\
    <option value="FreeBSD 4.10-RELEASE">FreeBSD 4.10-RELEASE</option>\
    <option value="FreeBSD 4.10-RELEASE and Ports">FreeBSD 4.10-RELEASE and Ports</option>\
    <option value="FreeBSD 4.11-RELEASE">FreeBSD 4.11-RELEASE</option>\
    <option value="FreeBSD 4.11-RELEASE and Ports">FreeBSD 4.11-RELEASE and Ports</option>\
    <option value="FreeBSD 5.0-RELEASE">FreeBSD 5.0-RELEASE</option>\
    <option value="FreeBSD 5.1-RELEASE">FreeBSD 5.1-RELEASE</option>\
    <option value="FreeBSD 5.2-RELEASE">FreeBSD 5.2-RELEASE</option>\
    <option value="FreeBSD 5.2-RELEASE and Ports">FreeBSD 5.2-RELEASE and Ports</option>\
    <option value="FreeBSD 5.2.1-RELEASE">FreeBSD 5.2.1-RELEASE</option>\
    <option value="FreeBSD 5.2.1-RELEASE and Ports">FreeBSD 5.2.1-RELEASE and Ports</option>\
    <option value="FreeBSD 5.3-RELEASE">FreeBSD 5.3-RELEASE</option>\
    <option value="FreeBSD 5.3-RELEASE and Ports">FreeBSD 5.3-RELEASE and Ports</option>\
    <option value="FreeBSD 5.4-RELEASE">FreeBSD 5.4-RELEASE</option>\
    <option value="FreeBSD 5.4-RELEASE and Ports">FreeBSD 5.4-RELEASE and Ports</option>\
    <option value="FreeBSD 5.5-RELEASE">FreeBSD 5.5-RELEASE</option>\
    <option value="FreeBSD 5.5-RELEASE and Ports">FreeBSD 5.5-RELEASE and Ports</option>\
    <option value="FreeBSD 6.0-RELEASE">FreeBSD 6.0-RELEASE</option>\
    <option value="FreeBSD 6.0-RELEASE and Ports">FreeBSD 6.0-RELEASE and Ports</option>\
    <option value="FreeBSD 6.1-RELEASE">FreeBSD 6.1-RELEASE</option>\
    <option value="FreeBSD 6.2-RELEASE">FreeBSD 6.2-RELEASE</option>\
    <option value="FreeBSD 6.3-RELEASE">FreeBSD 6.3-RELEASE</option>\
    <option value="FreeBSD 6.3-RELEASE and Ports">FreeBSD 6.3-RELEASE and Ports</option>\
    <option value="FreeBSD 6.4-RELEASE">FreeBSD 6.4-RELEASE</option>\
    <option value="FreeBSD 6.4-RELEASE and Ports">FreeBSD 6.4-RELEASE and Ports</option>\
    <option value="FreeBSD 6.4-stable">FreeBSD 6.4-stable</option>\
    <option value="FreeBSD 7.0-RELEASE">FreeBSD 7.0-RELEASE</option>\
    <option value="FreeBSD 7.1-RELEASE">FreeBSD 7.1-RELEASE</option>\
    <option value="FreeBSD 7.1-RELEASE and Ports">FreeBSD 7.1-RELEASE and Ports</option>\
    <option value="FreeBSD 7.2-RELEASE">FreeBSD 7.2-RELEASE</option>\
    <option value="FreeBSD 7.2-RELEASE and Ports">FreeBSD 7.2-RELEASE and Ports</option>\
    <option value="FreeBSD 7.3-RELEASE">FreeBSD 7.3-RELEASE</option>\
    <option value="FreeBSD 7.3-RELEASE and Ports">FreeBSD 7.3-RELEASE and Ports</option>\
    <option value="FreeBSD 7.4-RELEASE">FreeBSD 7.4-RELEASE</option>\
    <option value="FreeBSD 7.4-RELEASE and Ports">FreeBSD 7.4-RELEASE and Ports</option>\
    <option value="FreeBSD 7.4-stable">FreeBSD 7.4-stable</option>\
    <option value="FreeBSD 8.0-RELEASE">FreeBSD 8.0-RELEASE</option>\
    <option value="FreeBSD 8.0-RELEASE and Ports">FreeBSD 8.0-RELEASE and Ports</option>\
    <option value="FreeBSD 8.1-RELEASE">FreeBSD 8.1-RELEASE</option>\
    <option value="FreeBSD 8.1-RELEASE and Ports">FreeBSD 8.1-RELEASE and Ports</option>\
    <option value="FreeBSD 8.2-RELEASE">FreeBSD 8.2-RELEASE</option>\
    <option value="FreeBSD 8.2-RELEASE and Ports">FreeBSD 8.2-RELEASE and Ports</option>\
    <option value="FreeBSD 8.3-RELEASE">FreeBSD 8.3-RELEASE</option>\
    <option value="FreeBSD 8.3-RELEASE and Ports">FreeBSD 8.3-RELEASE and Ports</option>\
    <option value="FreeBSD 8.4-RELEASE">FreeBSD 8.4-RELEASE</option>\
    <option value="FreeBSD 8.4-RELEASE and Ports">FreeBSD 8.4-RELEASE and Ports</option>\
    <option value="FreeBSD 8.4-stable">FreeBSD 8.4-stable</option>\
    <option value="FreeBSD 9.0-RELEASE">FreeBSD 9.0-RELEASE</option>\
    <option value="FreeBSD 9.0-RELEASE and Ports">FreeBSD 9.0-RELEASE and Ports</option>\
    <option value="FreeBSD 9.1-RELEASE">FreeBSD 9.1-RELEASE</option>\
    <option value="FreeBSD 9.1-RELEASE and Ports">FreeBSD 9.1-RELEASE and Ports</option>\
    <option value="FreeBSD 9.2-RELEASE">FreeBSD 9.2-RELEASE</option>\
    <option value="FreeBSD 9.2-RELEASE and Ports">FreeBSD 9.2-RELEASE and Ports</option>\
    <option value="FreeBSD 9.3-RELEASE">FreeBSD 9.3-RELEASE</option>\
    <option value="FreeBSD 9.3-RELEASE and Ports">FreeBSD 9.3-RELEASE and Ports</option>\
    <option value="FreeBSD 9.3-stable">FreeBSD 9.3-stable</option>\
    <option value="FreeBSD 10.0-RELEASE">FreeBSD 10.0-RELEASE</option>\
    <option value="FreeBSD 10.0-stable">FreeBSD 10.0-stable</option>\
    <option selected="selected" value="FreeBSD 10.1-RELEASE">FreeBSD 10.1-RELEASE</option>\
    <option value="FreeBSD 10.1-RELEASE and Ports">FreeBSD 10.1-RELEASE and Ports</option>\
    <option value="FreeBSD 10.1-stable">FreeBSD 10.1-stable</option>\
    <option value="FreeBSD 11-current">FreeBSD 11-current</option>\
    <option value="FreeBSD Ports 2.2.8-RELEASE">FreeBSD Ports 2.2.8-RELEASE</option>\
    <option value="FreeBSD Ports 3.4-RELEASE">FreeBSD Ports 3.4-RELEASE</option>\
    <option value="FreeBSD Ports 3.5-RELEASE">FreeBSD Ports 3.5-RELEASE</option>\
    <option value="FreeBSD Ports 3.5.1-RELEASE">FreeBSD Ports 3.5.1-RELEASE</option>\
    <option value="FreeBSD Ports 4.1.1-RELEASE">FreeBSD Ports 4.1.1-RELEASE</option>\
    <option value="FreeBSD Ports 4.2-RELEASE">FreeBSD Ports 4.2-RELEASE</option>\
    <option value="FreeBSD Ports 4.3-RELEASE">FreeBSD Ports 4.3-RELEASE</option>\
    <option value="FreeBSD Ports 4.5-RELEASE">FreeBSD Ports 4.5-RELEASE</option>\
    <option value="FreeBSD Ports 4.6-RELEASE">FreeBSD Ports 4.6-RELEASE</option>\
    <option value="FreeBSD Ports 4.6.2-RELEASE">FreeBSD Ports 4.6.2-RELEASE</option>\
    <option value="FreeBSD Ports 4.7-RELEASE">FreeBSD Ports 4.7-RELEASE</option>\
    <option value="FreeBSD Ports 4.8-RELEASE">FreeBSD Ports 4.8-RELEASE</option>\
    <option value="FreeBSD Ports 4.9-RELEASE">FreeBSD Ports 4.9-RELEASE</option>\
    <option value="FreeBSD Ports 4.10-RELEASE">FreeBSD Ports 4.10-RELEASE</option>\
    <option value="FreeBSD Ports 4.11-RELEASE">FreeBSD Ports 4.11-RELEASE</option>\
    <option value="FreeBSD Ports 5.1-RELEASE">FreeBSD Ports 5.1-RELEASE</option>\
    <option value="FreeBSD Ports 5.2-RELEASE">FreeBSD Ports 5.2-RELEASE</option>\
    <option value="FreeBSD Ports 5.2.1-RELEASE">FreeBSD Ports 5.2.1-RELEASE</option>\
    <option value="FreeBSD Ports 5.3-RELEASE">FreeBSD Ports 5.3-RELEASE</option>\
    <option value="FreeBSD Ports 5.4-RELEASE">FreeBSD Ports 5.4-RELEASE</option>\
    <option value="FreeBSD Ports 5.5-RELEASE">FreeBSD Ports 5.5-RELEASE</option>\
    <option value="FreeBSD Ports 6.0-RELEASE">FreeBSD Ports 6.0-RELEASE</option>\
    <option value="FreeBSD Ports 6.2-RELEASE">FreeBSD Ports 6.2-RELEASE</option>\
    <option value="FreeBSD Ports 6.3-RELEASE">FreeBSD Ports 6.3-RELEASE</option>\
    <option value="FreeBSD Ports 6.4-RELEASE">FreeBSD Ports 6.4-RELEASE</option>\
    <option value="FreeBSD Ports 7.0-RELEASE">FreeBSD Ports 7.0-RELEASE</option>\
    <option value="FreeBSD Ports 7.1-RELEASE">FreeBSD Ports 7.1-RELEASE</option>\
    <option value="FreeBSD Ports 7.2-RELEASE">FreeBSD Ports 7.2-RELEASE</option>\
    <option value="FreeBSD Ports 7.3-RELEASE">FreeBSD Ports 7.3-RELEASE</option>\
    <option value="FreeBSD Ports 7.4-RELEASE">FreeBSD Ports 7.4-RELEASE</option>\
    <option value="FreeBSD Ports 8.0-RELEASE">FreeBSD Ports 8.0-RELEASE</option>\
    <option value="FreeBSD Ports 8.1-RELEASE">FreeBSD Ports 8.1-RELEASE</option>\
    <option value="FreeBSD Ports 8.2-RELEASE">FreeBSD Ports 8.2-RELEASE</option>\
    <option value="FreeBSD Ports 8.3-RELEASE">FreeBSD Ports 8.3-RELEASE</option>\
    <option value="FreeBSD Ports 8.4-RELEASE">FreeBSD Ports 8.4-RELEASE</option>\
    <option value="FreeBSD Ports 9.0-RELEASE">FreeBSD Ports 9.0-RELEASE</option>\
    <option value="FreeBSD Ports 9.1-RELEASE">FreeBSD Ports 9.1-RELEASE</option>\
    <option value="FreeBSD Ports 9.2-RELEASE">FreeBSD Ports 9.2-RELEASE</option>\
    <option value="FreeBSD Ports 9.3-RELEASE">FreeBSD Ports 9.3-RELEASE</option>\
    <option value="FreeBSD Ports 10.0-RELEASE">FreeBSD Ports 10.0-RELEASE</option>\
    <option value="FreeBSD Ports 10.1-RELEASE">FreeBSD Ports 10.1-RELEASE</option>\
    <option value="HP-UX 10.01">HP-UX 10.01</option>\
    <option value="HP-UX 10.10">HP-UX 10.10</option>\
    <option value="HP-UX 10.20">HP-UX 10.20</option>\
    <option value="HP-UX 11.00">HP-UX 11.00</option>\
    <option value="HP-UX 11.11">HP-UX 11.11</option>\
    <option value="HP-UX 11.20">HP-UX 11.20</option>\
    <option value="HP-UX 11.22">HP-UX 11.22</option>\
    <option value="Linux Slackware 3.1">Linux Slackware 3.1</option>\
    <option value="Minix 2.0">Minix 2.0</option>\
    <option value="NetBSD 1.0">NetBSD 1.0</option>\
    <option value="NetBSD 1.1">NetBSD 1.1</option>\
    <option value="NetBSD 1.2">NetBSD 1.2</option>\
    <option value="NetBSD 1.2.1">NetBSD 1.2.1</option>\
    <option value="NetBSD 1.3">NetBSD 1.3</option>\
    <option value="NetBSD 1.3.1">NetBSD 1.3.1</option>\
    <option value="NetBSD 1.3.2">NetBSD 1.3.2</option>\
    <option value="NetBSD 1.3.3">NetBSD 1.3.3</option>\
    <option value="NetBSD 1.4">NetBSD 1.4</option>\
    <option value="NetBSD 1.4.1">NetBSD 1.4.1</option>\
    <option value="NetBSD 1.4.2">NetBSD 1.4.2</option>\
    <option value="NetBSD 1.4.3">NetBSD 1.4.3</option>\
    <option value="NetBSD 1.5">NetBSD 1.5</option>\
    <option value="NetBSD 1.5.1">NetBSD 1.5.1</option>\
    <option value="NetBSD 1.5.2">NetBSD 1.5.2</option>\
    <option value="NetBSD 1.5.3">NetBSD 1.5.3</option>\
    <option value="NetBSD 1.6">NetBSD 1.6</option>\
    <option value="NetBSD 1.6.1">NetBSD 1.6.1</option>\
    <option value="NetBSD 1.6.2">NetBSD 1.6.2</option>\
    <option value="NetBSD 2.0">NetBSD 2.0</option>\
    <option value="NetBSD 2.0.2">NetBSD 2.0.2</option>\
    <option value="NetBSD 2.1">NetBSD 2.1</option>\
    <option value="NetBSD 3.0">NetBSD 3.0</option>\
    <option value="NetBSD 3.1">NetBSD 3.1</option>\
    <option value="NetBSD 4.0">NetBSD 4.0</option>\
    <option value="NetBSD 4.0.1">NetBSD 4.0.1</option>\
    <option value="NetBSD 5.0">NetBSD 5.0</option>\
    <option value="NetBSD 5.1">NetBSD 5.1</option>\
    <option value="NetBSD 6.0">NetBSD 6.0</option>\
    <option value="NetBSD 6.1.5">NetBSD 6.1.5</option>\
    <option value="OpenBSD 2.0">OpenBSD 2.0</option>\
    <option value="OpenBSD 2.1">OpenBSD 2.1</option>\
    <option value="OpenBSD 2.2">OpenBSD 2.2</option>\
    <option value="OpenBSD 2.3">OpenBSD 2.3</option>\
    <option value="OpenBSD 2.4">OpenBSD 2.4</option>\
    <option value="OpenBSD 2.5">OpenBSD 2.5</option>\
    <option value="OpenBSD 2.6">OpenBSD 2.6</option>\
    <option value="OpenBSD 2.7">OpenBSD 2.7</option>\
    <option value="OpenBSD 2.8">OpenBSD 2.8</option>\
    <option value="OpenBSD 2.9">OpenBSD 2.9</option>\
    <option value="OpenBSD 3.0">OpenBSD 3.0</option>\
    <option value="OpenBSD 3.1">OpenBSD 3.1</option>\
    <option value="OpenBSD 3.2">OpenBSD 3.2</option>\
    <option value="OpenBSD 3.3">OpenBSD 3.3</option>\
    <option value="OpenBSD 3.4">OpenBSD 3.4</option>\
    <option value="OpenBSD 3.5">OpenBSD 3.5</option>\
    <option value="OpenBSD 3.6">OpenBSD 3.6</option>\
    <option value="OpenBSD 3.7">OpenBSD 3.7</option>\
    <option value="OpenBSD 3.8">OpenBSD 3.8</option>\
    <option value="OpenBSD 3.9">OpenBSD 3.9</option>\
    <option value="OpenBSD 4.0">OpenBSD 4.0</option>\
    <option value="OpenBSD 4.1">OpenBSD 4.1</option>\
    <option value="OpenBSD 4.2">OpenBSD 4.2</option>\
    <option value="OpenBSD 4.3">OpenBSD 4.3</option>\
    <option value="OpenBSD 4.4">OpenBSD 4.4</option>\
    <option value="OpenBSD 4.5">OpenBSD 4.5</option>\
    <option value="OpenBSD 4.6">OpenBSD 4.6</option>\
    <option value="OpenBSD 4.7">OpenBSD 4.7</option>\
    <option value="OpenBSD 4.8">OpenBSD 4.8</option>\
    <option value="OpenBSD 4.9">OpenBSD 4.9</option>\
    <option value="OpenBSD 5.0">OpenBSD 5.0</option>\
    <option value="OpenBSD 5.1">OpenBSD 5.1</option>\
    <option value="OpenBSD 5.2">OpenBSD 5.2</option>\
    <option value="OpenBSD 5.3">OpenBSD 5.3</option>\
    <option value="OpenBSD 5.4">OpenBSD 5.4</option>\
    <option value="OpenBSD 5.5">OpenBSD 5.5</option>\
    <option value="OpenBSD 5.6">OpenBSD 5.6</option>\
    <option value="OpenDarwin 6.6.1/x86">OpenDarwin 6.6.1/x86</option>\
    <option value="OpenDarwin 6.6.2/x86">OpenDarwin 6.6.2/x86</option>\
    <option value="OpenDarwin 7.2.1">OpenDarwin 7.2.1</option>\
    <option value="OpenDarwin 20030208pre4/ppc">OpenDarwin 20030208pre4/ppc</option>\
    <option value="OSF1 V4.0/alpha">OSF1 V4.0/alpha</option>\
    <option value="OSF1 V5.1/alpha">OSF1 V5.1/alpha</option>\
    <option value="Plan 9">Plan 9</option>\
    <option value="Red Hat Linux/i386 4.2">Red Hat Linux/i386 4.2</option>\
    <option value="Red Hat Linux/i386 5.0">Red Hat Linux/i386 5.0</option>\
    <option value="Red Hat Linux/i386 5.2">Red Hat Linux/i386 5.2</option>\
    <option value="Red Hat Linux/i386 6.1">Red Hat Linux/i386 6.1</option>\
    <option value="Red Hat Linux/i386 6.2">Red Hat Linux/i386 6.2</option>\
    <option value="Red Hat Linux/i386 7.0">Red Hat Linux/i386 7.0</option>\
    <option value="Red Hat Linux/i386 7.1">Red Hat Linux/i386 7.1</option>\
    <option value="Red Hat Linux/i386 7.2">Red Hat Linux/i386 7.2</option>\
    <option value="Red Hat Linux/i386 7.3">Red Hat Linux/i386 7.3</option>\
    <option value="Red Hat Linux/i386 8.0">Red Hat Linux/i386 8.0</option>\
    <option value="Red Hat Linux/i386 9">Red Hat Linux/i386 9</option>\
    <option value="SunOS 4.1.3">SunOS 4.1.3</option>\
    <option value="SunOS 5.5.1">SunOS 5.5.1</option>\
    <option value="SunOS 5.6">SunOS 5.6</option>\
    <option value="SunOS 5.7">SunOS 5.7</option>\
    <option value="SunOS 5.8">SunOS 5.8</option>\
    <option value="SunOS 5.9">SunOS 5.9</option>\
    <option value="SunOS 5.10">SunOS 5.10</option>\
    <option value="SuSE Linux/i386 4.3">SuSE Linux/i386 4.3</option>\
    <option value="SuSE Linux/i386 5.0">SuSE Linux/i386 5.0</option>\
    <option value="SuSE Linux/i386 5.2">SuSE Linux/i386 5.2</option>\
    <option value="SuSE Linux/i386 5.3">SuSE Linux/i386 5.3</option>\
    <option value="SuSE Linux/i386 6.0">SuSE Linux/i386 6.0</option>\
    <option value="SuSE Linux/i386 6.1">SuSE Linux/i386 6.1</option>\
    <option value="SuSE Linux/i386 6.3">SuSE Linux/i386 6.3</option>\
    <option value="SuSE Linux/i386 6.4">SuSE Linux/i386 6.4</option>\
    <option value="SuSE Linux/i386 7.0">SuSE Linux/i386 7.0</option>\
    <option value="SuSE Linux/i386 7.1">SuSE Linux/i386 7.1</option>\
    <option value="SuSE Linux/i386 7.2">SuSE Linux/i386 7.2</option>\
    <option value="SuSE Linux/i386 7.3">SuSE Linux/i386 7.3</option>\
    <option value="SuSE Linux/i386 8.0">SuSE Linux/i386 8.0</option>\
    <option value="SuSE Linux/i386 8.1">SuSE Linux/i386 8.1</option>\
    <option value="SuSE Linux/i386 8.2">SuSE Linux/i386 8.2</option>\
    <option value="SuSE Linux/i386 9.2">SuSE Linux/i386 9.2</option>\
    <option value="SuSE Linux/i386 9.3">SuSE Linux/i386 9.3</option>\
    <option value="SuSE Linux/i386 10.0">SuSE Linux/i386 10.0</option>\
    <option value="SuSE Linux/i386 10.1">SuSE Linux/i386 10.1</option>\
    <option value="SuSE Linux/i386 10.2">SuSE Linux/i386 10.2</option>\
    <option value="SuSE Linux/i386 10.3">SuSE Linux/i386 10.3</option>\
    <option value="SuSE Linux/i386 11.0">SuSE Linux/i386 11.0</option>\
    <option value="SuSE Linux/i386 11.1">SuSE Linux/i386 11.1</option>\
    <option value="SuSE Linux/i386 11.2">SuSE Linux/i386 11.2</option>\
    <option value="SuSE Linux/i386 11.3">SuSE Linux/i386 11.3</option>\
    <option value="SuSE Linux/i386 ES 10 SP1">SuSE Linux/i386 ES 10 SP1</option>\
    <option value="ULTRIX 4.2">ULTRIX 4.2</option>\
    <option value="Unix Seventh Edition">Unix Seventh Edition</option>\
    <option value="X11R6.7.0">X11R6.7.0</option>\
    <option value="X11R6.8.2">X11R6.8.2</option>\
    <option value="X11R6.9.0">X11R6.9.0</option>\
    <option value="X11R7.2">X11R7.2</option>\
    <option value="X11R7.3.2">X11R7.3.2</option>\
    <option value="X11R7.4">X11R7.4</option>\
    <option value="XFree86 2.1">XFree86 2.1</option>\
    <option value="XFree86 3.3">XFree86 3.3</option>\
    <option value="XFree86 3.3.6">XFree86 3.3.6</option>\
    <option value="XFree86 4.0">XFree86 4.0</option>\
    <option value="XFree86 4.0.1">XFree86 4.0.1</option>\
    <option value="XFree86 4.0.2">XFree86 4.0.2</option>\
    <option value="XFree86 4.1.0">XFree86 4.1.0</option>\
    <option value="XFree86 4.2.0">XFree86 4.2.0</option>\
    <option value="XFree86 4.2.99.3">XFree86 4.2.99.3</option>\
    <option value="XFree86 4.3.0">XFree86 4.3.0</option>\
    <option value="XFree86 4.4.0">XFree86 4.4.0</option>\
    <option value="XFree86 4.5.0">XFree86 4.5.0</option>\
    <option value="XFree86 4.6.0">XFree86 4.6.0</option>\
    <option value="XFree86 4.7.0">XFree86 4.7.0</option>\
    </select>\
    <select name="arch">\
    <option  value="default">default</option>\
    <option  value="amd64">amd64</option>\
    <option  value="arm">arm</option>\
    <option  value="i386">i386</option>\
    <option  value="powerpc">powerpc</option>\
    <option  value="sparc64">sparc64</option>\
    </select>\
    Architecture\
    \
    <br />\
    <input name="apropos" value="1" type="radio" /> <a href="/cgi/man.cgi?query=apropos&amp;sektion=1&amp;apropos=0">Apropos</a> Keyword Search (all sections)\
    <select name="format">\
    <option value="html">html</option>\
    <option value="pdf">pdf</option>\
    <option value="ascii">ascii</option>\
    </select>\
    '
*/

/******************************************************************************
 * super simple debug function to work with Dashboard & Safari
 * debugging output can be viwed in the Console (Applications/Utilities)
 *****************************************************************************/
function debug(str)
{
    // Write to the debug div when running in a browser.
    // Send a simple alert to Console when in Dashboard.
	if (debugMode) {
        if (!window.widget) {
            console.debug(str);
        }
        else
		{
			var debugDiv = document.getElementById('debugDiv');
			debugDiv.appendChild(document.createTextNode(str));
			debugDiv.appendChild(document.createElement("br"));
			debugDiv.scrollTop = debugDiv.scrollHeight;
		}
	}
}

// Toggle the debugMode flag, but only show the debugDiv in Safari
function toggleDebug() {
    // debugMode = !debugMode;
	if (debugMode == true && window.widget) {
		document.getElementById('debugDiv').style.display = 'block';
	} else {
		document.getElementById('debugDiv').style.display = 'none';
	}
}


/******************************************************************************
 * initialize variables
 *****************************************************************************/
function setup()
{		
    // Activate debug
    toggleDebug();
    
    // TODO: avoid global variables.
    key = null;
    modifier = null;
	timer = null;
	linkedPage = false;
	searchID='';
	highlightedKeyword = '';
	keyword = null;
	prefsVisible = false;
	runLocal = false;
	response = '';
	subsearch = false;
	searchFocus = true;
	lookupString = '';
	newSearch = true;
	command = null;
	lookupTimer = null;
	secondaryLookup = false;
	page_history = [];
	windowHeight = 300;
	skipFormatting = false;
	
	apropos = false;
	section = 0;
	query = 0;
	manpath = 0;
	locale = 0;
	req = null;
	
	document.getElementById("manualtext").innerHTML = "<br><br><br><br><br><br><br><br><br><table width=100%'><tr><td align='center'><b>*NIX</b> <i>manual</i></td></tr></table>";
	debug( 'v' + version);
	
	window.onkeydown = interpretKeypress;
	window.onkeyup = interpretKeyrelease;
	
	document.getElementById('SearchField').onfocus = onFocus;
	document.getElementById('SearchField').onblur = onBlur;

	clicker = new DoubleClick( "selectionLookup();");

	createGenericButton( document.getElementById('done'), 'Done', hidePrefs);
	
	document.getElementById('SearchField').focus();
	document.getElementById('SearchField').select();

	loadSearchPulldowns();
	loadPrefs();
}

/******************************************************************************
 * miscellaneous network related functions
 *****************************************************************************/

//dynamically load search pulldowns so that the widget updates itself implicitly
function loadSearchPulldowns()
{	
	req = new XMLHttpRequest();
	url = "http://www.freebsd.org/cgi/man.cgi";
    req.open("GET", url ,false);
    
    // TODO: make local the default action.
    
    // In case there is no connection we switch to local lookups.
    try{

        req.send(null);
        response = req.responseText;

        // Uncomment this line for testing.
        // response = testResponseText;
    	if(response)
    	{
            debug("responseText");
            
            // Build a dummy DOM object to hold the HTML from the server
            var dummyDoc = new DOMParser().parseFromString(response, 'text/html');
            debug("dummyDoc");
            
            // Get the sektion
            var sektion = dummyDoc.getElementsByName('sektion')[0];
            debug("sektion");
            var APROPOS_OPTION = "<OPTION VALUE='k'>k - Keyword Search (apropos)</OPTION>";
            sektion.innerHTML = sektion.innerHTML + APROPOS_OPTION;
            debug("sektion innerHTML: " + sektion.innerHTML);
            
            // Get manpath
            var manpathElement = dummyDoc.getElementsByName('manpath')[0];            

    		document.getElementById('section').innerHTML = sektion.innerHTML;
    		document.getElementById('remote_manpath').innerHTML = manpathElement.innerHTML;
    	} else {
            debug("no responseText");
    		displayStatus("<b>No internet connection detected.  Lookups will default to the local man pages.</b>", 0);
    		expand_collapse();
    		runLocally();
    	}
    }
    catch (err){
        debug('error on loading external resource: ' + url);
        debug("no responseText");
		displayStatus("<b>No internet connection detected.  Lookups will default to the local man pages.</b>", 0);
		expand_collapse();
		runLocally();
    }
    document.getElementById('section').onchange = function(event){
        debug('section onchange');
        selectSection(event.target.options[event.target.selectedIndex].value);
        document.getElementById('SearchField').focus();
        document.getElementById('SearchField').select();
    };

}

function selectSection(section)
{
	if(section == '0') section = "•";
	document.getElementById('section_label').innerText = section;
	document.getElementById('section').selectedIndex = 0;
	
	for(i = 0; i < document.getElementById('section').options.length; i++){
		if(document.getElementById('section').options[i].value == section)
			document.getElementById('section').selectedIndex = i;
	}
	sectionIndex = '' + document.getElementById('section').selectedIndex;
	widget.setPreferenceForKey(sectionIndex, 'sectionIndex');
}

//take necessary measures if no internet connection is present
function runLocally()
{
	runLocal = true;
	
	document.getElementById('remote_settings').style.display = 'none';
	document.getElementById('local_settings').style.display = 'block';
	document.getElementById('local').checked = true;
	document.getElementById('remote').disabled = true;
}

/******************************************************************************
 * various utility functions
 *****************************************************************************/

function displayHelp()
{
	req = new XMLHttpRequest();
	
	debug('getting help');
	req.open("GET", "help.txt" ,false);
	req.send(null);
	response = formatManpage('<PRE><br><br>' + req.responseText + '</PRE>');
	
	setTabText(query);
	addHistory('help', response, 0, prevScrollTop, highlightedKeyword);
	
	document.getElementById('manualtext').innerHTML = response;
	
	//debug(document.getElementById('manualtext').innerHTML);	
}

// replace spaces with '+' for searching
function searchString(s)
{
	pattern = /\W+/gi;
	replace = '+';
	return s.replace(pattern, replace);
}

//remove flags and adjust tab to fit new command name
function setTabText(s)
{
	s = s.replace(/((\W|^)-\w*|\d:+|\d\s)*/gi,'');
	document.getElementById('tab').style.left = (-160 + 7*s.length);
	document.getElementById('commands').style.width = (20 + 7*s.length) + "px";
	document.getElementById('function').innerText = s;
}

//display an error/alert/status message
function displayStatus(message, showProgress)
{	
	html = "<br><br><br><br><br><br><br><br><br><table width='100%'>";
	
	if(showProgress)
		html += "<tr><td align='center'><img src='Images/progress.gif' width='115' height='10'></td></tr>";
	
	html += "<tr><td align='center'><b>";
	html += message; //(<b>No internet connection detected.  Lookups will default to the local man pages.</b>)
	html += "</b></td></tr></table>";
	
	document.getElementById('manualtext').innerHTML = html;
}

var expanded = false;
var resizing = false;
//minimize or maximize the widget
function expand_collapse()
{
	if(resizing) return;
	
	if(document.getElementById('function').innerText == '') return;
	
	document.getElementById('tab').style.display = "block";
	document.getElementById('SearchField').focus();
	document.getElementById('SearchField').select();

	if(!expanded)
	{	
		resizing = true; setTimeout("resizing=false;", 250);
		window.resizeBy(0, windowHeight - window.outerHeight);
		
		expanded = true;
		Effect.BlindDown('blind', {duration: 0.2});
		document.getElementById('SearchField').blur();
	} else {
		resizing = true; setTimeout("resizing=false;", 250);
		setTimeout("window.resizeBy(0, 55 - window.outerHeight);", 250);
		
		expanded = false;
		Effect.BlindUp('blind', {duration: 0.2});
	}
}

//locate the absolute X position of obj
function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	
	return curleft;
}

//locate the absolute Y position of obj
function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	
	return curtop;
}

/******************************************************************************
 * initialize search when query is entered
 *****************************************************************************/
function processRequest(q,linked) {
	
	prevScrollTop = document.getElementById('manualtext').scrollTop;
	secondaryLookup = false;
	
	//check for skip-format flag
	if(q.match(/-i /))
	{
        debug("skipFormatting");
		skipFormatting = true;
		q = q.replace("-i ", " ");
	} else
		skipFormatting = false;
	
	//handle request for *NIX manual help pages
	if(q == 'help' || q == 'nixmanual')
	{	
        debug("help");
		query = q;
		searchID = 'help';		
		displayHelp();
		
		if(!expanded) expand_collapse();
	}
	//handle subsearch mode when active
	else if(subsearch)
	{
        debug("subsearch");
		if(q)
			highlightKeyword(q);
		else 
			document.getElementById('manualtext').innerHTML = response;
		
		//exit subsearch mode
		subsearch = false;
		document.getElementById('SearchField').style.color = '#000000';
		document.getElementById('SearchField').value = query;
		selectSection(document.getElementById("section").selectedIndex);
		document.getElementById('section').disabled = false;
	}
	//standard search
	else if(q)
	{
        debug("preparing the query");
		linkedPage = linked;
		query = q;
		
		//get search parameters
		//should change to occur when prefs are saved instead of each lookup
		
		sectionPulldown = document.getElementById("section");
		section = (sectionPulldown.selectedIndex) ? sectionPulldown[sectionPulldown.selectedIndex].value : "";
		if(section == 'k' || q.match(/(\s|^)-k\s/))
		{
			apropos = true;
			section = 0;
		} else apropos = false;
		
		/*
		if(apropos || q.match(/(\s|^)-k\s/))
		{
			document.getElementById('manualtext').style.overflowX = 'scroll';
			document.getElementById('manualtext').style.overflowY = 'scroll';
			document.getElementById('growbox').style.right = '2px';
		}
		else
		{
			document.getElementById('manualtext').style.overflowX = 'hidden';
			document.getElementById('manualtext').style.overflowY = 'scroll';
			document.getElementById('growbox').style.right = '18px';
		}
		*/
		
		locale  = manpathPulldown.disabled == true;
        debug("locale: " + locale);
        manpath = "";
		if(locale){
            /* Local lookup parameters */
			localeCommand = "localLookup('";
        }
		else{
            /* Remote lookup parameters */
			localeCommand = "remoteLookup('";
    		manpathPulldown = document.getElementById('remote_manpath');
            debug("manpathPulldown: " + manpathPulldown);
            var manpathPulldownSelectedIndex = manpathPulldown.selectedIndex;
            debug("manpathPulldown index: " + manpathPulldownSelectedIndex);
            if (manpathPulldownSelectedIndex < 0)
                manpathPulldownSelectedIndex = 0;
            debug("manpathPulldown index: " + manpathPulldownSelectedIndex);
    		manpath = manpathPulldown[manpathPulldownSelectedIndex].value;
        }
        debug("manpath: " + manpath);
        		
		newID = query  + apropos + section + manpath + locale;
		
		//perform search only when not already displayed
		if(newID != searchID)
		{
			searchID = newID;
			debug('Search ID: ' + searchID);
			  
			if(apropos)
				displayStatus("<b>Performing keyword search for '</b><i>" + query + "</i><b>'...</b>", true);
			else
				displayStatus("<b>Loading manual entry for '</b><i>" + query + "</i><b>'...</b>", true);
						
			newSearch = true;  //?
			setTabText(query);
			
			lookupString = localeCommand + query + "', " + apropos + ", '" + section + "', '" + manpath + "')";
			//alert(lookupString);
			setTimeout(lookupString, 0);
			
			if(!expanded) expand_collapse();
		}
	} else {
		if(expanded)
			expand_collapse();
		return;
	}
			
	//switch focus to the keyboard
	document.getElementById('SearchField').focus();
	document.getElementById('SearchField').select();
	document.getElementById('SearchField').blur();
}

/******************************************************************************
 * perform a search of the local manpages
 *****************************************************************************/
function localLookup(q,a,s,man_path)
{	
	//kill presently running lookup
	if(command)
	{
		command.cancel();
		command = null;
	}
	
	newSearch = false;
	
	//apropos flag
	if(a) a = " -k ";
	else a = "";
	
	//section flag
	if(s != '0') s = s + " ";
	else s = "";
	
	//check for additional paths
	var m = q.match(/.*-M\s*(\S*)/);
	if(m)
	{
		q = q.replace(/.*-M\s*(\S*)/," ");
		m = ":" + m[1];
	} else m = "";
	
	//set a generous initial timer
	if(lookupTimer)
		clearTimeout(lookupTimer);
	lookupTimer = setTimeout("killLocalLookup()", 8000);
	
	///usr/local/man:/usr/share/man:/usr/local/share/man:/usr/X11/man
	commandString = "man " + s + q + a + " -M " + document.getElementById('local_manpath').value + m + " | col -bx > nixmanpage.txt";
	//commandString = "man " + s + q + a + " -M /usr/local/man:/usr/share/man:/usr/local/share/man:/usr/X11/man | col -bx";
	debug(commandString);
	command = widget.system(commandString, loadPageFromFile);//_doneLocalLookup);
	//command.onreadoutput = someLocalLookup;
}

function loadPageFromFile()
{
	req = new XMLHttpRequest();
	req.open("GET", "nixmanpage.txt" ,false);
	req.send(null);
	
	if(req.responseText == '')
		response = 'No manual entry';
	else
	{
		if(apropos) response = "<div class='formatted'><br><br>" + req.responseText.replace(/\n/g,"<br><br>") + '</div>';
		else response = '<PRE><br><br>' + req.responseText + '</PRE>';
	}
	setTabText(query);
	doneLocalLookup();
}

function doneLocalLookup(s)
{
	debug('System call complete.');
	
	//clear the timer
	if(lookupTimer)
		clearTimeout(lookupTimer);
	
	if(s)
		response += s;
	
	//check for empty results
	errorIndex = (response.length < 15) ? 0 : -1;
	errorIndex += response.indexOf(": nothing appropriate");
	errorIndex += response.indexOf("No manual entry");
	
	if(errorIndex < -2)
	{
		debug('Formatting text.');
		
		if(apropos) response += '</div>';
		else response += '</PRE>';
		
		response = formatManpage(response);
		
		debug('Displaying man page.');
		addHistory(query, response, section, prevScrollTop, highlightedKeyword);
		document.getElementById('manualtext').innerHTML = response;
		
		//transfer focus to keyboard
		document.getElementById('SearchField').focus();
		document.getElementById('SearchField').select();
		document.getElementById('SearchField').blur();
		setTabText(query);
	} else if(document.getElementById('autodefault').checked && !secondaryLookup)
	{
		secondaryLookup = true;
		displayStatus("<b>No local results found.  Performing remote lookup for</b><i> " + query + " </i><b>instead.</b>", true);
		remoteLookup(query,apropos,section,manpath);
	} else
	{
		debug('No man page found.');
		searchID = '';
		section = (section == '0') ? "any section." : ("section " + section + ".");
		displayStatus("No manual entry was found for <b>'</b><i>" + query + "</i><b>'</b> in " + section,false);
		
		//refocus the search field
		document.getElementById('SearchField').focus();
		document.getElementById('SearchField').select();
	}
}

function killLocalLookup()
{
	//keep the portion of the manpage already loaded
	s = command.outputString;
	
	//cancel the lookup
	command.cancel();
	command = null;
	
	//clear the lookup timer
	if(lookupTimer)
		clearTimeout(lookupTimer);
	debug('Timeout.');
	
	//handle the output
	if(response == '<PRE><br><br>')
	{
		if(document.getElementById('autodefault').checked && !secondaryLookup)
		{
			secondaryLookup = true;
			displayStatus("<b>No local results found.  Performing remote lookup for</b><i> " + query + " </i><b>instead.</b>", true);
			remoteLookup(q,a,s,m);
		} else {
			searchID = '';
			debug('Widget.system() froze.  Lookup aborted.');
			displayStatus("The system timed out while searching for <i><b>'</b>" + query + "</i><b>'.</b>",false);
			
			//return focus to the search field
			document.getElementById('SearchField').focus();
			document.getElementById('SearchField').select();
		}
	} else {
		doneLocalLookup(s);
	}
}

/******************************************************************************
 * perform a search at freeBSD.org
 *****************************************************************************/
function remoteLookup(q,a,s,m)
{
	req = new XMLHttpRequest();
	url = "http://www.freebsd.org/cgi/man.cgi?query=" + q + (a ? "&apropos=true" : "") + "&sektion=" + s + "&manpath=" + m + "&format=html";
	debug(url);
	req.onreadystatechange = doneRemoteLookup;
	req.open("GET", url ,true);
	//req.setRequestHeader("Cache-Control", "no-cache");
	req.send(null);
}

function doneRemoteLookup()
{
	if(req.readyState == 4)
	{
		debug('status: '+req.status);
		if(req.status == 200)
		{
			response = req.responseText;
			
			//alert(response);
			
			//check for empty results
			errorIndex = response.indexOf("Sorry, no data") + response.indexOf("Empty input, no");
					
			if(errorIndex < 0)
			{	
				//parse out relevant HTML
				
				if(apropos)
				{
					//response = response.replace(/\<\s*dl\s*\>/gi,"<dl>");
					start = response.indexOf("<dl>");
					if(start < 0) start = response.indexOf("<DL>");
					end = response.indexOf("</dl>");
					if(end < 0) start = response.indexOf("</DL>");
					
					response = "<br><div class='formatted'>" + response.substring(start, end) + "</div>";
				} else {			
					start = response.indexOf("<pre>") + 6;
					if(start < 0) start = response.indexOf("<PRE>") + 6;
					end = response.indexOf("</pre>") + 6;
					if(end < 0) end = response.indexOf("<PRE>") + 6;
					
					response = "<br><PRE>" + response.substring(start, end);
				}
				
				// replace url links with javascript lookups
				url = /"\/cgi\/man\.cgi\?([^&]*&amp;)*query=([^&]*)&amp;sektion=([^&]*)[^\"]*\"/gi;
				javascript = "\"javascript: linkLookup('$2','$3');\"";
				response = response.replace(url, javascript);
				
				url = /"\/cgi\/man\.cgi\?([^&]*&)*query=([^&]*)&sektion=([^&]*)[^\"]*\"/gi;
				javascript = "\"javascript: linkLookup('$2','$3');\"";
				response = response.replace(url, javascript);
				
				addHistory(query, response, section, prevScrollTop, highlightedKeyword);
				document.getElementById('manualtext').innerHTML = response;
		
			} else {
				if(document.getElementById('autodefault').checked && !secondaryLookup)
				{
					secondaryLookup = true;
					displayStatus("<b>No remote results found.  Performing local lookup for</b><i> " + query + " </i><b>instead.</b>", true);
					localLookup(query,apropos,section,manpath);
				} else if(linkedPage)
					displayStatus("The manual entry for <i><b>'</b>" + query + "</i><b>'</b> is either out of date or currently inaccessible.", false);
				else
					displayStatus("No manual entry was found for <i><b>'</b>" + query + "</i><b>'.</b>", false);
				
				searchID = '';
				
				//refocus search field
				document.getElementById('SearchField').focus();
				document.getElementById('SearchField').select();
			}
	
			key = null;
		} else {
			displayStatus("<b>No internet connection detected.  Performing local lookup for</b><i> " + query + " </i><b>instead.</b>", true);
			searchID = '';
			localLookup(q,a,s,m);
		}
	}
}

/******************************************************************************
 * perform a search at freeBSD.org via hyperlink
 *****************************************************************************/
function linkLookup(q, s)
{
	//alert("link: remoteLookup('" + query + "', 0, '" + section + "', 'FreeBSD+5.3+RELEASE+and+Ports')");
	
	query = q;
	section = s;
	linkedPage = true;
	apropos = false;

	newID = query  + apropos + section + manpath + locale;
		
	//don't reload a search that is already displayed
	if(newID != searchID)
	{
		searchID = newID;
		debug('Search ID: ' + searchID);

		setTabText(query);
		document.getElementById("SearchField").value = query;
		
		document.getElementById("manualtext").innerHTML = "<br><br><br><br><br><br><br><br><br><table width=100%'><tr><td align='center'><b>Loading manual entry for '</b><i>" + query + "</i><b>'...</b></td></tr><tr><td align='center'><img src='Images/progress.gif' width='115' height='10'></td></tr></table>";
		
        // TODO: Get current manpath
        selectedManPath = manpath; // 'FreeBSD+5.3+RELEASE+and+Ports';
        // var queryString = "remoteLookup('" + query + "', 0, '" + section + "', selectedManPath)";
        // debug("linkLookup: " + queryString);
        remoteLookup(query, 0, section, selectedManPath);
		// setTimeout(queryString, 5);
	}
	//refocus the search field
	document.getElementById('SearchField').focus();
	document.getElementById('SearchField').select();
	document.getElementById('SearchField').blur();
}

/******************************************************************************
 * perform a 'virtual hyperlink' search using selected text
 *****************************************************************************/
function selectionLookup()
{
	selectedText = window.getSelection();
	if(selectedText != '')
	{	
		query = selectedText;
		document.getElementById('SearchField').value = query;
        var queryString = "processRequest('"+query+"')";
        debug(queryString);
		setTimeout(queryString, 0);
	}
}

/******************************************************************************
 * sub search provides /lookup functionality for highlihgting keywords
 *****************************************************************************/
function highlightKeyword(word, force)
{
	if(force || highlightedKeyword != word && word != '')
	{
		re = new RegExp('((\<[ib]\>)*'+word+'(\<\\[ib]\>)*)', 'gi');
		debug(re);
		document.getElementById('manualtext').innerHTML = response.replace(re, "<k id='key' class='k'>$1</k>");
		
		keyword = document.getElementById('key');
		while(keyword && keyword.nodeName != 'K')
			keyword = keyword.nextSibling;
	} else {
		oldKeyword = keyword;
		if(keyword)
		{
			keyword = keyword.nextSibling;
			while(keyword && (keyword.nodeName != 'K' || findPosY(keyword) == findPosY(oldKeyword)))
				keyword = keyword.nextSibling;
		} else
			keyword = document.getElementById('key');
	}
	if(keyword)
	{
		document.getElementById('manualtext').scrollTop = findPosY(keyword) - 50;
		highlightedKeyword = word;
	}
}

/******************************************************************************
 * regular expressions for formatting local manpages
 *****************************************************************************/
function formatManpage(s)
{
	if(skipFormatting)
	{
		//fix '<*>' tag errors (such as in malloc/free/gcc)
		pattern = /(\s)\<([^\>]*)\>(\s)/g;
		replace = "$1&lt;$2&gt;$3";
		s = s.replace(pattern, replace);
		
		return s;
	}
	
	//fix '<*>' tag errors (such as in malloc/free/gcc)
	pattern = /(\s)\<([^\>]*)\>(\s)/g;
	replace = "$1&lt;<b>$2</b>&gt;$3";
	s = s.replace(pattern, replace);
	
	//format functions
	pattern = /([\w\-_.]+)\(([^\)]*)\)/g;
	replace = "<b>$1</b>(<i>$2</i>)";
	s = s.replace(pattern, replace);

	//bold #includes
	pattern = /(#[^\s]*)/g;
	replace = "<b>$1</b>";
	s = s.replace(pattern, replace);

	//italicize keywords
	pattern = /(NULL|[page]*size\s|\w*ptr\w*|\sformat|src\w*|dst\w*|\slen\w*|\snumber|[^\w\[]file\s|\serrno)(\W)/g;
	replace = "<i>$1</i>$2";
	s = s.replace(pattern, replace);

	//italicize keywords
	pattern = /(NULL|[page]*size\s|\w*ptr\w*|\sformat|src\w*|dst\w*|\slen\w*|\snumber|[^\w\[]file\s|\serrno)/g;
	replace = "<i>$1</i>";
	s = s.replace(pattern, replace);

	//bold keywords
	pattern = /(\d+\.\s|\s\w\s\s)/g;
	replace = "<b>$1</b>";
	s = s.replace(pattern, replace);

	//bold flag and italicize args
	pattern = /(\s\-+[\w\-]+)=(\w[\w.\-_]*)/g;
	replace = "<b>$1</b>=<i>$2</i>\n";
	s = s.replace(pattern, replace);
	
	//bold flag and italicize args
	pattern = /(\s\-+[\w\-@]+)([\s=]+)(\w[\w.\-_]*\s*)\n/g;
	replace = "<b>$1</b>$2<i>$3</i>\n";
	s = s.replace(pattern, replace);
	
	//bold flags
	pattern = /(\s\-+[\w@][\w\-@]*)/g;
	replace = "<b>$1</b>";
	s = s.replace(pattern, replace);

	//underline args
	pattern = /\[((\-*\w+)+)\s*([^\]]*)/g;
	replace = "[<b>$1</b> <u>$3</u>";
	s = s.replace(pattern, replace);
	
	//bold command name
	pattern = new RegExp("(\\W)("+query+")(\\W)", "g");
	replace = "$1<b>$2</b>$3";
	s = s.replace(pattern, replace);	

	//bold section headers and capitalized words
	pattern = /(([A-Z]|_|\-){4,})/g;
	replace = "<b>$1</b>";
	s = s.replace(pattern, replace);

	pattern = /(SEE)/g;
	replace = "<b>$1</b>";
	s = s.replace(pattern, replace);

	return s;
}

/******************************************************************************
 * some basic CSS functions
 *****************************************************************************/
function setStyleById(i, p, v)
{
    var n = document.getElementById(i);
    n.style[p] = v;
}

function changeCSSRule(rule, style, value)
{
	var ss = document.styleSheets[0];
	var r = ss.cssRules;
	
	for(i=1; i<r.length; i++) {
		if(r[i].selectorText.toLowerCase() == rule.toLowerCase())
			eval("r[i].style." + style + " = '" + value + "';");
	}	
}

/******************************************************************************
 * font preference functions
 *****************************************************************************/
function changeFont(e)
{
	var f;
	
	switch(e.selectedIndex) {
	
		case 0: f = 'Andale Mono'; break;
		case 1: f = 'Monaco'; break;
		case 2: f = 'Courier'; break;
	}

	changeCSSRule(".formatted", "fontFamily", f);
	changeCSSRule("PRE", "fontFamily", f);
	changeCSSRule("b", "fontFamily", f);
	changeCSSRule("i", "fontFamily", f);
	changeCSSRule(".k", "fontFamily", f);
}

function changeFontsize(e)
{
	size = e[e.selectedIndex].value;
	
	changeCSSRule(".formatted", "fontSize", size);
	changeCSSRule("PRE", "fontSize", size);
	changeCSSRule("b", "fontSize", size);
	changeCSSRule("i", "fontSize", size);
	changeCSSRule(".k", "fontSize", size);
	changeCSSRule("manualtext", "fontSize", size);
	
	//alert("default size: " + (510 + 70*Math.pow(size-10, .65)));
	window.resizeTo(510 + 70*Math.pow(size-10, 0.65), window.outerHeight);
}

/******************************************************************************
 * search preference functions
 *****************************************************************************/
function localeChange(location)
{
	manpathPulldown = document.getElementById('remote_manpath');
	document.getElementById('local').checked = (location == 0);

	if(location == 0)
	{
		manpathPulldown.disabled = true;
		document.getElementById('remote_settings').style.display = 'none';
		document.getElementById('local_settings').style.display = 'block';
	} else {
		manpathPulldown.disabled = false;
		document.getElementById('remote_settings').style.display = 'block';
		document.getElementById('local_settings').style.display = 'none';
	}
}

/******************************************************************************
 * colorset functions
 *****************************************************************************/

function loadCustomColorset()
{
	colorset = widget.preferenceForKey('colorset');
	
	if(colorset)
		return colorset;
	else
		return "'FFFFFF','000000','000000','000000','000000','000000'";
}

function saveCustomColorset()
{
	colorset = "'";
	colorset += (document.getElementById('bgcolor').value + "','");
	colorset += (document.getElementById('fontcolor').value + "','");
	colorset += (document.getElementById('linkcolor').value + "','");
	colorset += (document.getElementById('highlightcolor').value + "','");
	colorset += (document.getElementById('boldcolor').value + "','");
	colorset += (document.getElementById('italiccolor').value);
	colorset += "'";
	
	//debug('Saved colorset: ' + colorset);
	widget.setPreferenceForKey(colorset,'colorset');
}

function editCustomColorset()
{
	document.getElementById('colorset').selectedIndex = 9;
}

function parseColorset(e)
{
	colorset = e[e.selectedIndex].value;
	
	if(colorset == "")
		colorset = loadCustomColorset();
	
	eval("applyColorset(" + colorset + ");");
}

function applyColorset(bgcolor, fontcolor, linkcolor, highlightcolor, boldcolor, italiccolor)
{
	document.getElementById("bgcolor").value = bgcolor;
	document.getElementById("fontcolor").value = fontcolor;
	document.getElementById("linkcolor").value = linkcolor;
	document.getElementById("highlightcolor").value = highlightcolor;
	document.getElementById("boldcolor").value = boldcolor;
	document.getElementById("italiccolor").value = italiccolor;
	
	updateSwatches();
}

function updateSwatches()
{
	bgcolor = formatHex(document.getElementById("bgcolor").value);
	document.getElementById("bgswatch").style.background = bgcolor;
	document.getElementById("bgcolor").style.background = bgcolor;
	document.getElementById("fontcolor").style.background = bgcolor;
	document.getElementById("linkcolor").style.background = bgcolor;
	document.getElementById("highlightcolor").style.background = bgcolor;
	document.getElementById("boldcolor").style.background = bgcolor;
	document.getElementById("italiccolor").style.background = bgcolor;
	
	fontcolor = formatHex(document.getElementById("fontcolor").value);
	document.getElementById("bgcolor").style.color = fontcolor;
	document.getElementById("fontswatch").style.background = fontcolor;
	document.getElementById("fontcolor").style.color = fontcolor;
	document.getElementById("highlightcolor").style.color = 'black';
	
	highlightcolor = formatHex(document.getElementById("highlightcolor").value);
	document.getElementById("highlightswatch").style.background = highlightcolor;
	document.getElementById("highlightcolor").style.background = highlightcolor;
	
	linkcolor = formatHex(document.getElementById("linkcolor").value);
	document.getElementById("linkswatch").style.background = linkcolor;
	document.getElementById("linkcolor").style.color = linkcolor;
	document.getElementById("linkcolor").style.fontWeight = 'bold';
	
	boldcolor = formatHex(document.getElementById("boldcolor").value);
	document.getElementById("boldswatch").style.background = boldcolor;
	document.getElementById("boldcolor").style.color = boldcolor;
	document.getElementById("boldcolor").style.fontWeight = 'bold';
	
	italiccolor = formatHex(document.getElementById("italiccolor").value);
	document.getElementById("italicswatch").style.background = italiccolor;
	document.getElementById("italiccolor").style.color = italiccolor;
	document.getElementById("italiccolor").style.fontStyle = 'italic';
	document.getElementById("italiccolor").style.fontWeight = 'bold';
	
	document.getElementById("background").style.background = bgcolor;

	changeCSSRule(".formatted", "color", fontcolor);
	changeCSSRule("PRE", "color", fontcolor);
	changeCSSRule("B", "color", boldcolor);
	changeCSSRule("I", "color", italiccolor);
	changeCSSRule(".k", "background",highlightcolor);
	//changeCSSRule(".k", "color", fontcolor);
	changeCSSRule("A:", "color", linkcolor);
	changeCSSRule("A:link", "color", linkcolor);
	changeCSSRule("A:hover", "color", highlightcolor);

	var mantext = document.getElementById("pre_mancontent");
	
	if(mantext) {
		mantext.style.color = fontcolor;
	}
}

// format as: #XXXXXX (ie. 123 -> #123000)
function formatHex(s)
{
	if(s.indexOf('#') < 0) s = '#' + s;
	while(s.length < 7) s = s + '0';
	
	return s;
}


/******************************************************************************
 * search field focus trackers
 *****************************************************************************/
function onFocus(event) {
    debug('onFocus');
	searchFocus = true;
}

function onBlur(event) {
    debug('onBlur');
	searchFocus = false;
}

/******************************************************************************
 * keyboard input handlers
 *****************************************************************************/
function interpretKeypress(e)
{
	key = e.keyCode;
	modifier = modifierKey(e);
	
	if(interpretKey(500, 20, e))
	{
		e.stopPropagation();
		e.preventDefault();
	}
}

function interpretKeyrelease(e)
{
	key = null;

	if(timer)
		clearTimeout(timer);
}

function modifierKey(e)
{
	return e.shiftKey + e.ctrlKey + e.altKey;
}

function interpretKey(delay, speed, e) {
				
	debug('keypressed: ' + key);
    if(key)
	{		
		if(document.getElementById("front").style.display == 'none') {
    		debug('front is none');
			setTimeout("updateSwatches();",5);
		} else {
			switch(key) {
			
				//up arrow
				case 38:document.getElementById('manualtext').scrollTop -= speed;
						timer = setTimeout("interpretKey(50," + (speed*1.05) + ");",delay);
						return true;
						break;
				//down arrow
				case 40:document.getElementById('manualtext').scrollTop += speed;
						timer = setTimeout("interpretKey(50," + (speed*1.05) + ");",delay);
						return true;
						break;
				//page up
				case 33:document.getElementById('manualtext').scrollTop -= (window.outerHeight - 75);
						timer = setTimeout("interpretKey(50," + (speed*1.05) + ");",delay);
						return true;
						break;
				//page down
				case 34:document.getElementById('manualtext').scrollTop += (window.outerHeight - 75);
						timer = setTimeout("interpretKey(50," + (speed*1.05) + ");",delay);
						return true;
						break;
				//home
				case 36:document.getElementById('manualtext').scrollTop -= document.getElementById('manualtext').scrollHeight;
						return true;
						break;
				//end
				case 35:document.getElementById('manualtext').scrollTop += document.getElementById('manualtext').scrollHeight;
						return true;
						break;
				//spacebar
				case 32:if(modifier)
						{
							expand_collapse();
							return true;
						}
						break;
				//enter
				case 13:
                    debug('searchfocus: '+ searchFocus + ', prefsVisible:' + prefsVisible);
                    if(!searchFocus && !prefsVisible)
						{
							selectionLookup();
							highlightKeyword(highlightedKeyword);
							return true;
						}
						break;
				//(sublookup: / )
				case 191:if(searchID != '')
						{
							subsearch = true;
							
							document.getElementById('section_label').innerText = '/';
							document.getElementById('section').disabled = true;
							document.getElementById('SearchField').style.color = '#666666';
							document.getElementById('SearchField').focus();
							document.getElementById('SearchField').select();
							document.getElementById('SearchField').value = '';
						
							return true;
						} else {
							debug('NO SEARCH ID');
						}
						break;
				//q
				case 81:if(!searchFocus)
						{
							removeHistory();
							
							//if(expanded) expand_collapse();
							
							clearTimeout(lookupTimer);
							//document.getElementById('tab').style.display = 'none';
							//document.getElementById('function').innerText = '';
							searchID = '';
							
							return true;
						} break;
				case 219: if(e.metaKey) { h_back(); return true; }
				case 221: if(e.metaKey) { h_forward(); return true; }
				//other
				default:key = null; //"UNMAPPED (" + key + ")";
			}
			return false;
		}
	}
}

/******************************************************************************
 * live resizing code
 *****************************************************************************/

var lastPos;

// The mouseDown function is called the user clicks on the growbox.  It prepares
// the widget to be resized and registers handlers for the resizing operations
function mouseDown(event)
{
	var x = event.x + window.screenX;	// the placement of the click
	var y = event.y + window.screenY;
	
	document.addEventListener("mousemove", mouseMove, true);
	document.addEventListener("mouseup", mouseUp, true);

	lastPos = {x:x, y:y};

	event.stopPropagation();
	event.preventDefault();
}


// mouseMove performs the actual resizing of the widget.  
// It is called after mouseDown activates it and every time the mouse moves.
function mouseMove(event)
{	
	// retrieves the current mouse position
	var screenY = event.y + window.screenY;
		
	// will hold the change since the last mouseMove event
	var deltaY = 0;
	
	// setting contraints for the heght
	var minHeight = 100;
	
	if ( (window.outerHeight + (screenY - lastPos.y)) > minHeight)
	{
		deltaY = screenY - lastPos.y;
		lastPos.y = screenY;
	} else {
		deltaY = minHeight - window.outerHeight;
		lastPos.y = window.screenY + minHeight;
	}
	
	window.resizeBy(0, deltaY);	// resizes the widget to follow the mouse movement

	event.stopPropagation();
	event.preventDefault();
}

//stop resizing
function mouseUp(event)
{
	document.removeEventListener("mousemove", mouseMove, true);
	document.removeEventListener("mouseup", mouseUp, true);	

	window.resizeBy(1,0);
	window.resizeBy(-1,0);
	
	windowHeight = window.outerHeight;
	widget.setPreferenceForKey(windowHeight, "windowHeight");
	
	event.stopPropagation();
	event.preventDefault();
}


/******************************************************************************
 * hide/show/load/save preferences
 *****************************************************************************/

function showPrefs()
{
	var front = document.getElementById("front");
	var back = document.getElementById("back");
	
	if(window.outerHeight < 265)
		window.resizeBy(0, 265 - window.outerHeight);
			
	if (window.widget)
		widget.prepareForTransition("ToBack");		// freezes the widget

	front.style.display="none";		// hide the front
	back.style.display="block";		// show the back
	
	if (window.widget)
		setTimeout ('widget.performTransition();', 0);		// flip the widget

	document.getElementById('fliprollie').style.display = 'none';
	prefsVisible = true;
}

function hidePrefs()
{
	var front = document.getElementById("front");
	var back = document.getElementById("back");
	
    try{
    	if (window.widget) {
            debug("transicion...");
    		savePrefs();
    		widget.prepareForTransition("ToFront");		// freezes the widget
    	}
	
    	back.style.display="none";			// hide the back
    	front.style.display="block";		// show the front
	
    	window.resizeBy(0, windowHeight - window.outerHeight);
	
    	if (window.widget)
    		setTimeout ('widget.performTransition();', 0);		// flip it back
	
    	prefsVisible = false;
    	document.getElementById('SearchField').focus();
    	document.getElementById('SearchField').select();
        
    }
    catch (err){
        debug("error while hidePrefs: " + err.message);
    }
}

function loadPrefs()
{
    // Only get preferences from plist files if we are running on the 
    // Dashboard environment.
    if(window.widget){
    	colorsetIndex = widget.preferenceForKey('colorsetIndex');
    	fontIndex = widget.preferenceForKey('fontIndex');
    	fontsizeIndex = widget.preferenceForKey('fontsizeIndex');
    	sectionIndex = widget.preferenceForKey('sectionIndex');
    	manpathIndex = widget.preferenceForKey('manpathIndex');
    	manpath = widget.preferenceForKey('manpath');
    	locale = widget.preferenceForKey('locale');
    	autodefault = widget.preferenceForKey('autodefault');
    	opacity = widget.preferenceForKey('opacity');
    	windowHeight = widget.preferenceForKey('windowHeight');
    	if(colorsetIndex)
    	{	
    		document.getElementById('background').style.opacity = opacity/100;
    		document.getElementById('opacity').value = opacity;
    		document.getElementById('colorset').selectedIndex = parseInt(colorsetIndex);
    		document.getElementById('fontface').selectedIndex = parseInt(fontIndex);
    		document.getElementById('fontsize').selectedIndex = parseInt(fontsizeIndex);
    		document.getElementById('section').selectedIndex = parseInt(sectionIndex);
    		if(sectionIndex && document.getElementById('section'))
    			selectSection(document.getElementById('section').options[sectionIndex].value);
    		if(!runLocal && manpathIndex)
    			document.getElementById('remote_manpath').selectedIndex = parseInt(manpathIndex);
    		if(manpath)
    			document.getElementById('local_manpath').value = manpath;
		
    		localeChange((locale) ? 0 : 1);
		
    		document.getElementById('autodefault').checked = (autodefault) ? 1 : 0;
		
    		parseColorset(document.getElementById('colorset'));
    		changeFont(document.getElementById('fontface'));
		
    		updateSwatches();
    		changeFontsize(document.getElementById('fontsize'));
    	} else {
    		document.getElementById('colorset').selectedIndex = 5;
    		parseColorset(document.getElementById('colorset'));
    	}
	} else {
		document.getElementById('colorset').selectedIndex = 5;
		parseColorset(document.getElementById('colorset'));
	}
	

}

function savePrefs()
{
	colorsetIndex = '' + document.getElementById('colorset').selectedIndex;
	fontIndex = '' + document.getElementById('fontface').selectedIndex;
	fontsizeIndex = '' + document.getElementById('fontsize').selectedIndex;
	sectionIndex = '' + document.getElementById('section').selectedIndex;
	
	manpathIndex = '' + document.getElementById('remote_manpath').selectedIndex;
	manpath = document.getElementById('local_manpath').value;
	locale = document.getElementById('remote_manpath').disabled;
	autodefault = document.getElementById('autodefault').checked;
	opacity = document.getElementById('opacity').value;

	widget.setPreferenceForKey(colorsetIndex, 'colorsetIndex');
	widget.setPreferenceForKey(fontIndex, 'fontIndex');
	widget.setPreferenceForKey(fontsizeIndex, 'fontsizeIndex');
	widget.setPreferenceForKey(sectionIndex, 'sectionIndex');
	if(!runLocal) widget.setPreferenceForKey(manpathIndex, 'manpathIndex');
	widget.setPreferenceForKey(manpath, 'manpath');
	widget.setPreferenceForKey(locale, 'locale');
	widget.setPreferenceForKey(autodefault, 'autodefault');
	widget.setPreferenceForKey(opacity, 'opacity');

	if(colorsetIndex == 9)
		saveCustomColorset();
}

// PREFERENCE BUTTON ANIMATION (- the pref flipper fade in/out)
var flipShown = false;


// A structure that holds information that is needed for the animation to run.
var animation = {duration:0, starttime:0, to:1.0, now:0.0, from:0.0, firstElement:null, timer:null};


// mousemove() is the event handle assigned to the onmousemove property on the
// front div of the widget. It is triggered whenever a mouse is moved within the
// bounds of your widget.  It prepares the preference flipper fade and then 
// calls animate() to performs the animation.

function mousemove (event)
{
	if (!flipShown)		// if the preferences flipper is not already showing...
	{
		//reset the timer
		if (animation.timer != null)
		{
			clearInterval (animation.timer);
			animation.timer  = null;
		}
		
		var starttime = (new Date()).getTime() - 13; 	// set it back one frame
		
		animation.duration = 500;												// animation time, in ms
		animation.starttime = starttime;										// specify the start time
		animation.firstElement = document.getElementById ('flip');				// specify the element to fade
		animation.timer = setInterval ("animate();", 13);						// set the animation function
		animation.from = animation.now;											// beginning opacity (not ness. 0)
		animation.to = 1.0;														// final opacity
		animate();																// begin animation
		flipShown = true;														// mark the flipper as animated
	}
}

// mouseexit() is the opposite of mousemove() in that it preps the preferences 
// flipper to disappear.  It adds the appropriate values to the animation data
// structure and sets the animation in motion.

function mouseexit (event)
{
	if (flipShown)
	{
		// fade in the flip widget
		if (animation.timer != null)
		{
			clearInterval (animation.timer);
			animation.timer  = null;
		}
		
		var starttime = (new Date).getTime() - 13;
		
		animation.duration = 500;
		animation.starttime = starttime;
		animation.firstElement = document.getElementById ('flip');
		animation.timer = setInterval ("animate();", 13);
		animation.from = animation.now;
		animation.to = 0.0;
		animate();
		flipShown = false;
	}
}

// animate() performs the fade animation for the preferences flipper.
// It uses the opacity CSS property to simulate a fade.
function animate()
{
	var T;
	var ease;
	var time = (new Date()).getTime();
	
	T = limit_3(time-animation.starttime, 0, animation.duration);
	
	if (T >= animation.duration)
	{
		clearInterval (animation.timer);
		animation.timer = null;
		animation.now = animation.to;
	}
	else
	{
		ease = 0.5 - (0.5 * Math.cos(Math.PI * T / animation.duration));
		animation.now = computeNextFloat (animation.from, animation.to, ease);
	}
	
	animation.firstElement.style.opacity = animation.now;
}

// these functions are utilities used by animate()
function limit_3 (a, b, c)
{
    return a < b ? b : (a > c ? c : a);
}

function computeNextFloat (from, to, ease)
{
    return from + (to - from) * ease;
}

// these functions are called when the info button itself receives mousee events
function enterflip(event)
{
	document.getElementById('fliprollie').style.display = 'block';
}

function exitflip(event)
{
	document.getElementById('fliprollie').style.display = 'none';
}


