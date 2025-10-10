document.addEventListener('DOMContentLoaded', () => {
  const orig = document.querySelector('.sidebar img.profile-pic');
  if (!orig) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'profile-rotator';
  orig.parentNode.insertBefore(wrapper, orig);

  orig.classList.remove('profile-pic');
  orig.classList.add('rot-img', 'active');
  wrapper.appendChild(orig);

  const extras = [
    'https://d2gjqh9j26unp0.cloudfront.net/profilepic/8989a1502ff9828cf8fd83fc37a4ca1f',
    'https://media.licdn.com/dms/image/v2/D4E03AQHboz_0qn7ZRQ/profile-displayphoto-shrink_800_800/B4EZZh70UbHEAc-/0/1745399795444?e=1762387200&v=beta&t=kRAQ7FQ6oDqOmFKtUCTCPIDKTXMuvRGE53Wtv9RYBQk'
  ];

  extras.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Foto Profil';
    img.className = 'rot-img';
    wrapper.appendChild(img);
  });

  const imgs = Array.from(wrapper.querySelectorAll('img'));
  let idx = 0;
  function rotate() {
    imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
    idx = (idx + 1) % imgs.length;
  }

  rotate();
  setInterval(rotate, 4000);
});