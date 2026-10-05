/* Schwebender „Folge uns“-Button mit Social-Media-Links (BBI Bark) */
(function(){
  var FB = 'https://www.facebook.com/share/1FfbuyR3dr/';
  var IG = 'https://www.instagram.com/bbi_bark/';

  var css = '' +
  '.sf{position:fixed; left:20px; bottom:20px; z-index:90; display:flex; flex-direction:column; align-items:flex-start; gap:10px; font-family:-apple-system,"Segoe UI",Roboto,Arial,sans-serif;}' +
  '.sf-toggle{display:inline-flex; align-items:center; gap:8px; border:0; cursor:pointer; background:#9C4630; color:#fff; font-family:inherit; font-weight:600; font-size:.95rem; line-height:1; padding:13px 18px; border-radius:999px; box-shadow:0 6px 18px rgba(44,58,47,.28); transition:background .15s ease, transform .15s ease;}' +
  '.sf-toggle:hover{background:#7A3524; transform:translateY(-1px);}' +
  '.sf-toggle:focus-visible,.sf-link:focus-visible{outline:3px solid #B98A3E; outline-offset:2px;}' +
  '.sf-toggle svg{width:18px; height:18px; flex:none; transition:transform .2s ease;}' +
  '.sf.open .sf-toggle svg{transform:rotate(45deg);}' +
  '.sf-panel{display:none; flex-direction:column; gap:8px; align-items:flex-start;}' +
  '.sf.open .sf-panel{display:flex;}' +
  '.sf-link{display:inline-flex; align-items:center; gap:10px; text-decoration:none; background:#FBF7EE; color:#3A2E27; font-weight:600; font-size:.92rem; padding:8px 16px 8px 8px; border-radius:999px; border:1px solid rgba(58,46,39,.18); box-shadow:0 4px 14px rgba(44,58,47,.18); transition:border-color .15s ease, color .15s ease;}' +
  '.sf-link:hover{border-color:#9C4630; color:#9C4630;}' +
  '.sf-ico{width:34px; height:34px; border-radius:50%; background:#3A4B3D; color:#F2E9D8; display:inline-flex; align-items:center; justify-content:center;}' +
  '.sf-ico svg{width:18px; height:18px;}' +
  '@media (max-width:560px){.sf{left:14px; bottom:14px;} .sf-toggle{padding:12px 15px;}}' +
  '@media (prefers-reduced-motion:reduce){.sf-toggle,.sf-toggle svg{transition:none;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var iconFb = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.7V21h2.8z"/></svg>';
  var iconIg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>';
  var iconPlus = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.500" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';

  var box = document.createElement('div');
  box.className = 'sf';
  box.innerHTML =
    '<div class="sf-panel" id="sfPanel">' +
      '<a class="sf-link" href="' + IG + '" target="_blank" rel="noopener"><span class="sf-ico">' + iconIg + '</span>Instagram</a>' +
      '<a class="sf-link" href="' + FB + '" target="_blank" rel="noopener"><span class="sf-ico">' + iconFb + '</span>Facebook</a>' +
    '</div>' +
    '<button type="button" class="sf-toggle" aria-expanded="false" aria-controls="sfPanel">' + iconPlus + '<span>Folge uns</span></button>';
  document.body.appendChild(box);

  var btn = box.querySelector('.sf-toggle');
  function setOpen(o){
    box.classList.toggle('open', o);
    btn.setAttribute('aria-expanded', o ? 'true' : 'false');
  }
  btn.addEventListener('click', function(){ setOpen(!box.classList.contains('open')); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && box.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function(e){
    if (!box.contains(e.target)) setOpen(false);
  });
})();
