var container = document.getElementById('visualization');

var groups = new vis.DataSet([{
    id: 0,
    content: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOqKI0kZG7nIV2w7AFRWfPUGiqeM0J26TbCp8irR1jZiNG556">'
  }
]);

var items = new vis.DataSet([{
    id: 0,
    group: 1,
    content: '<div class="online"></div>',
    start: '2015-08-31 12:55:05'
  },
  {
    id: 1,
    group: 1,
    content: '<div class="online"></div>',
    start: '2015-08-31 12:55:10'
  }
]);

// Configuration for the Timeline
var options = {
  stack: false,
  hiddenDates: [{
      start: '2014-03-21 00:00:00',
      end: '2014-03-28 00:00:00'
    }, {
      start: '2013-10-26 00:00:00',
      end: '2013-10-28 00:00:00',
      repeat: 'weekly'
    }, // daily weekly monthly yearly
    {
      start: '2013-03-29 19:00:00',
      end: '2013-03-30 09:00:00',
      repeat: 'daily'
    } // daily weekly monthly yearly
  ],
  minHeight: '100%',
  editable: false,
  orientation: 'top',
  min: new Date('2015-01-01'),
  max: new Date('2015-12-31'),
  zoomMin: 1000 * 60 * 3,
  zoomMax: 1000 * 60 * 60 * 24 * 31,
  margin: {
    item: 10,
    axis: 5
  }
};

// Create a Timeline

var timeline = new vis.Timeline(container, null, options);
timeline.setGroups(groups);
timeline.setItems(items);

items.add({
  id: items.length,
  group: 1,
  content: '<div class="online"></div>',
  start: '2015-09-01 12:55:10'
});

const addNumber = (numb) => {
  groups.add({
    id: groups.length,
    content: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOqKI0kZG7nIV2w7AFRWfPUGiqeM0J26TbCp8irR1jZiNG556">'
  });
}

addNumber();


var overlay = $("#overlay"),
  fab = $(".fab"),
  cancel = $("#cancel"),
  submit = $("#submit"),
  name = $("#name"),
  number = $("#number");

//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);
submit.on('click', subFAB);

function openFAB(event) {
  if (event) event.preventDefault();
  fab.addClass('active');
  overlay.addClass('dark-overlay');

}

function closeFAB(event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  fab.removeClass('active');
  overlay.removeClass('dark-overlay');
}

function subFAB(event) {
  const user = {
    id: number.val(),
    content: ` ${$("#name").val()}<br>${$("#number").val()}`
  };
  groups.add(user);
  closeFAB(event);
}
