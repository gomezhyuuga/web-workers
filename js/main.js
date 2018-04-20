$(function () {
  console.log('it works');

  $('#computeSeq, #computePar').click(compute);
});

function reset() {
  $('#result').html("Calculando resultado...");
  $('#performance').html("0.00");
}
function compute(event) {
  reset();

  var start_time = performance.now();
  var limit = +$('#limit').val() || 1e8; limit++;
  var thread_no = (this.id === "computeSeq") ? 1 : +$('#thread_no').val();

  var finished = 0;
  for (var i = 0; i < thread_no; i++) {
    var worker = new Worker('js/coprime_worker.js')
    var size   = Math.floor(limit / thread_no);
    var start = i * size;
    var end = (i === thread_no - 1) ? limit : (i + 1) * size;

    worker.postMessage({
      start: start,
      end: end
    });

    var result = 0;
    worker.onmessage = function (event) {
      finished += 1;
      result += event.data;

      if (finished === thread_no) {
        var end_time = performance.now();
        var time = (end_time - start_time) / 1000;
        $('#result').html(result);
        $('#performance').html(time);
      }
    }
  }
}
