function iterateRecords(data) {
	console.log(data);
	$.each(data.result.records, function (recordKey, recordValue) {
		var recordTitle = recordValue["name"];
		var recordCategory = recordValue["category"];
		var recordBio = recordValue["bio"];
		var recordAvatersrc = recordValue["avatar"];
		var avater = recordAvatersrc["src"]
		var recordCoverphoto = recordValue["cover_photo"];
		var cover = recordCoverphoto["src"]
		var recordWebsite = recordValue["website"];
		$("#records").append(
			$('<article class="record">').append(
				$('<h2 class="title">').text(recordTitle),
				$('<img class="avater">').attr("src", avater),
				$('<h3 class="cate">').text(recordCategory),
				$('<p class="bio">').text(recordBio),
				$('<img class="cover">').attr("src", cover),
				$('<div>').append(
					$("<a class='link'>").attr("href", recordWebsite).text(recordWebsite)
				)
			)
		);
	})

}

$(document).ready(function () {

	$.ajax({
		url: "json/trucks.json",
		data: String,
		dataType: "json",
		cache: true,
		success: function (data) {
			iterateRecords(data);
		}
	});

}

);


