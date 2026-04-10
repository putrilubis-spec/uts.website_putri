document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let hp = document.getElementById("hp").value;

    let valid = true;

    if(nama === ""){
        errNama.innerText = "Nama wajib diisi";
        valid = false;
    } else errNama.innerText = "";

    if(!email.includes("@")){
        errEmail.innerText = "Email tidak valid";
        valid = false;
    } else errEmail.innerText = "";

    if(hp <= 0){
        errHp.innerText = "Nomor harus positif";
        valid = false;
    } else errHp.innerText = "";

    if(valid){
        alert("Registrasi berhasil 🎉");
    }
});
 