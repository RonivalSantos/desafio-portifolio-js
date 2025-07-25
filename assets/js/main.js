(async function () {
  const profileData = await fetchProfileData();
  uptadeProfileData(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperience(profileData);
})();

function uptadeProfileData(profileData) {
  const profileImg = document.querySelector('.profile-photo');
  profileImg.src = profileData.photo;

  const nome = document.querySelector('.profile-name');
  profileImg.alt = profileData.nome;
  nome.innerText = profileData.nome;

  const job = document.querySelector('.profile-job');
  job.innerText = profileData.job;

  const location = document.querySelector('.profile-location');
  location.innerText = profileData.localidade.cidade;

  const phone = document.querySelector('.profile-phone');
  phone.innerText = profileData.telefone;
  phone.href = `tel:${profileData.telefone}`;

  const email = document.querySelector('.profile-email');
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile-skills-softskills');

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join('');
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('hardSkills');

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"/></li>`,
    )
    .join('');
}

function updateLanguages(profileData) {
  const languages = document.querySelector('.languages');

  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language.nome}</li>`)
    .join('');
}

function updatePortfolio(profileData) {
  const portfolio = document.querySelector('.portfolio');

  portfolio.innerHTML = profileData.portfolio
    .map((portfolio) => {
      return `<li><h3 class="title github">${portfolio.nome}</h3> <a href="${portfolio.gitHub}" target="_blank">${portfolio.gitHub}</a></li>`;
    })
    .join('');
}

function updateExperience(profileData) {
  const experience = document.querySelector('.experience');

  experience.innerHTML = profileData.experiencias
    .map((experiencia) => {
      return `<li><h3 class="title experience-title">${experiencia.nome} / ${experiencia.instituicao}</h3>
      <p class="period experience-period">${experiencia.periodo.inicio} - ${experiencia.periodo.fim}</p>
      <p>${experiencia.descricao}</p></li>`;
    })
    .join('');
}
