const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
const list = document.getElementById('list')

const listContent = []

addBtn.addEventListener('click', function () {
	listContent.push({
		content: content.value,
		date: date.value,
		time: time.value
	})

	let htmlStr = ''
	listContent.forEach(function (item) {
		htmlStr = htmlStr + `
			<div class="item">
				<div>
					<p>内容 : ${item.content}</p>
					<p>时间 : ${item.date} ${item.time}</p>
				</div>
			</div>
		`
	})
	list.innerHTML = htmlStr
})

removeBtn.addEventListener('click', function () {
	listContent.pop()
	let htmlStr = ''
	listContent.forEach(function (item) {
		htmlStr = htmlStr + `
			<div class="item">
				<div>
					<p>内容 : ${item.content}</p>
					<p>时间 : ${item.date} ${item.time}</p>
				</div>
			</div>
		`
	})
	list.innerHTML = htmlStr
})


