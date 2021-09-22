('use strict');

export function scrambleText() {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————
  var TextScramble = /*#__PURE__*/ (function () {
    function TextScramble(el) {
      _classCallCheck(this, TextScramble);

      this.el = el;
      // this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.chars = '!<%>-_@$[#]{}—+*^?#___';
      this.update = this.update.bind(this);
    }

    _createClass(TextScramble, [
      {
        key: 'setText',
        value: function setText(newText) {
          var _this = this;

          var oldText = this.el.innerText;
          var length = Math.max(oldText.length, newText.length);
          var promise = new Promise(function (resolve) {
            return (_this.resolve = resolve);
          });
          this.queue = [];

          for (var i = 0; i < length; i++) {
            var from = oldText[i] || '';
            var to = newText[i] || '';
            var start = Math.floor(Math.random() * 40);
            var end = start + Math.floor(Math.random() * 40);
            this.queue.push({
              from: from,
              to: to,
              start: start,
              end: end,
            });
          }

          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        },
      },
      {
        key: 'update',
        value: function update() {
          var output = '';
          var complete = 0;

          for (var i = 0, n = this.queue.length; i < n; i++) {
            var _this$queue$i = this.queue[i],
              from = _this$queue$i.from,
              to = _this$queue$i.to,
              start = _this$queue$i.start,
              end = _this$queue$i.end,
              char = _this$queue$i.char;

            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }

              output += '<span class="scramble-symbol">'.concat(
                char,
                '</span>'
              );
            } else {
              output += from;
            }
          }

          this.el.innerHTML = output;

          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        },
      },
      {
        key: 'randomChar',
        value: function randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        },
      },
    ]);

    return TextScramble;
  })(); // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————

  var phrases = [
    'We strive to innovate the medical industry through provision of qualitym edical information for the clinical scene.Our services and products aim to provide our clients and members with never ending inspiration, exhilaration, and joy.We hope to provide corporate value for our investors, while inviting concordance with our mission to serve society.It is important to maintain an enriching work environment that promotes rewarding each team member to grow and flourish, and where one can share a unified purpose with the group, whether they be a professional in medicine, IT, communication, management, and others.Given there is a limit to what we can do as M3, we wish to continue collaborative efforts with like-minds to actualize advancement in the field of medicine.',
    // '誰も挑戦していない分野へ',
    // 'あなたにしかできない仕事がここに',
  ];
  var el = document.querySelector('.js-scrambleInterval');
  var fx = new TextScramble(el);
  var counter = 0;

  var next = function next() {
    fx.setText(phrases[counter]).then(function () {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };
}

// next();
