(async function showJson() {
  const profileData = await fetchProfileData();
  console.log(profileData);
})();
