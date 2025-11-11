// Simple client-side login handler (demo only)
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    message.textContent = '';

    const username = form.username.value.trim();
    const password = form.password.value;

    if(!username || !password){
      message.textContent = 'Masukkan nama pengguna dan kata sandi.';
      return;
    }

    // Simulate network call
    message.textContent = 'Memproses...';
    setTimeout(()=>{
      // Demo credentials: admin / admin
      if(username === 'admin' && password === 'admin'){
        message.style.color = 'green';
        message.textContent = 'Berhasil masuk — mengarahkan...';
        // Redirect to dashboard if exists
        setTimeout(()=>{ window.location.href = '/dashboard.html'; }, 700);
      } else {
        message.style.color = '#b91c1c';
        message.textContent = 'Nama pengguna atau kata sandi salah.';
      }
    },700);
  });
});