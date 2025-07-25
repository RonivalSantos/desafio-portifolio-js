(async function () {
  const profileData = await fetchProfileData();
  uptadeProfileData(profileData);
  updateSoftSkills(profileData);
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
    .map(skill => `<li>${skill}</li>`)
    .join('');
}
