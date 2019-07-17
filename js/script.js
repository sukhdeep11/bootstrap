function toggleSidebar() {

    document.getElementById('sidebar').classList.toggle('sidebar');
    document.getElementById('sidebar').classList.toggle('sidebar-full');
    document.getElementById('largenav').style.display = "inline";
    document.getElementById('smallnav').style.display = "none";
}

function toggleSidehalf() {

    document.getElementById('sidebar').classList.toggle('sidebar');
    document.getElementById('sidebar').classList.toggle('sidebar-half');
    document.getElementById('largenav').style.display = "none";
    document.getElementById('smallnav').style.display = "block";
}