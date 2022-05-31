function bike_data(){
    const brand_nombre = document.getElementById("nombre").value
    const brand_correo = document.getElementById("correo").value
    const brand_tel = document.getElementById("tel").value
    const brand_inputGroupSelect01 = document.getElementById("inputGroupSelect01").value
    document.getElementById("invoice_excel").innerHTML = brand_nombre + " " + brand_correo + " " + brand_tel + " " + brand_inputGroupSelect01
}