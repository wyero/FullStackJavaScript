jQuery('form').validate({
    rules:{
       namaDepan: "required",
       namaBelakang: "required",
       email: "required",
       nomorTlpn: "required",
       password: {
            required: true,
            minlength: 7
       },
       ulangPassword: {
            required: true,
            equalTo: "#password"
       }
    }, messages:{
        namaDepan: "nama depan belum diisi",
        namaBelakang: "nama belakang belum diisi",
        email: {
            required: "alamat email belum diisi",
            email: "masukkan alamat email yang valid"
        },
        nomorTlpn: "nomor telepon belum diisi",
        password: {
            required: "password belum diisi",
            minlength: "panjang password minimal 7 karakter"
        },
        ulangPassword:{
            required: "masukkan ulang password",
            equalTo: "masukkan password yang sama"
        }
    }
})