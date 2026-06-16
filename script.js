 ======================
 HEADER SCROLL
 ======================

const header = document.getElementById(header);

window.addEventListener(scroll, () = {
  if (window.scrollY  50) {
    header.classList.add(scrolled);
  } else {
    header.classList.remove(scrolled);
  }
});

 ======================
 MOBILE MENU
 ======================

const hamburger =
  document.getElementById(hamburger);

const mobileNav =
  document.getElementById(mobile-nav);

hamburger.addEventListener(click, () = {
  hamburger.classList.toggle(open);
  mobileNav.classList.toggle(open);
});

 ======================
 ANIMAÇÕES
 ======================

document
  .querySelectorAll(.animate-fade-up)
  .forEach((el, index) = {
    setTimeout(() = {
      el.classList.add(ready);
    }, index  150);
  });

const observer =
  new IntersectionObserver(
    entries = {
      entries.forEach(entry = {
        if (entry.isIntersecting) {
          entry.target.classList.add(visible);
        }
      });
    },
    {
      threshold 0.15
    }
  );

document
  .querySelectorAll(.scroll-fade)
  .forEach(el = observer.observe(el));

 ======================
 CONTADORES
 ======================

const counters =
  document.querySelectorAll(.counter);

counters.forEach(counter = {

  const animate = () = {

    const target =
      Number(counter.dataset.target);

    const current =
      Number(counter.innerText);

    const increment =
      target  60;

    if (current  target) {

      counter.innerText =
        Math.ceil(current + increment);

      requestAnimationFrame(animate);

    } else {

      counter.innerText =
        counter.dataset.prefix + target;

    }
  };

  animate();
});

 ======================
 TOAST
 ======================

function showToast(message, type) {

  const toast =
    document.getElementById(toast);

  toast.innerHTML = message;

  toast.className = ;
  toast.classList.add(type);
  toast.classList.add(show);

  setTimeout(() = {
    toast.classList.remove(show);
  }, 4000);
}

 ======================
 FORMULÁRIO SUPABASE
 ======================

const form =
  document.getElementById(lead-form);

form.addEventListener(
  submit,
  async function (e) {

    e.preventDefault();

    const btn =
      document.getElementById(
        btn-submit
      );

    const spinner =
      document.getElementById(
        spinner
      );

    const btnText =
      document.getElementById(
        btn-text
      );

    btn.disabled = true;

    spinner.classList.remove(
      hidden
    );

    btnText.innerText =
      Enviando...;

    const dados = {

      nome
        document.getElementById(
          nome
        ).value,

      empresa
        document.getElementById(
          empresa
        ).value,

      email
        document.getElementById(
          email
        ).value,

      telefone
        document.getElementById(
          telefone
        ).value,

      cidade
        document.getElementById(
          cidade
        ).value,

      area
        document.getElementById(
          area
        ).value,

      mensagem
        document.getElementById(
          mensagem
        ).value
    };

    try {

      const { error } =
        await supabaseClient
          .from(contatos)
          .insert([dados]);

      if (error) throw error;

      form.reset();

      showToast(
        Mensagem enviada com sucesso!,
        success
      );

    } catch (err) {

      console.error(err);

      showToast(
        Erro ao enviar. Tente novamente.,
        error
      );

    } finally {

      spinner.classList.add(
        hidden
      );

      btn.disabled = false;

      btnText.innerText =
        Enviar Solicitação;
    }
  }
);