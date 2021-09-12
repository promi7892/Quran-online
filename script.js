const loadSurah = () => {
	fetch('http://api.alquran.cloud/v1/surah')
		.then((reponse) => reponse.json())
		.then((data) => displayList(data.data));
	// .then((data) => console.log(data.data[0]));
};

const displayList = (allSurah) => {
	const list = document.getElementById('table-list');
	const viewAllSurah = document.createElement('table');
	allSurah.forEach((surah) => {
		viewAllSurah.classList.add('table');
		viewAllSurah.innerHTML += `
		<thead>
								
							</thead>
							<tbody>
								<tr>
									<th scope="row">${surah.number}</th>
									<td>${surah.name}</td>
									<td>${surah.englishNameTranslation}</td>
								</tr>
							</tbody>
	`;
		list.appendChild(viewAllSurah);
	});
};

loadSurah();
