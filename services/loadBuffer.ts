async function loadBuffer(source: string, context: AudioContext, fn: (buffer: AudioBuffer) => void) {
  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error('Network response was not ok');
    const audio = await response.arrayBuffer();
    const buffer = await context.decodeAudioData(audio);
    fn(buffer);
  } catch (error) {
    console.log(error);
  }
};

function loadBuffer2(source: string, context: AudioContext, fn: (buffer: AudioBuffer) => void) {
  const request = new XMLHttpRequest();
  request.open('GET', 'audio/' + source, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      fn(buffer);
    }, function (error) {
      console.log(error);
    });
  };

  request.onerror = function() {
    console.log('Audio error');
  };

  request.onprogress = function(e) {
    console.log('Loading audio...');
  };

  request.onabort = function() {
    console.log('Audio aborted');
  };

  request.send();
};