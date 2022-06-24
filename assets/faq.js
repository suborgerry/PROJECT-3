'use strict';

var faqGroupBtn = document.querySelectorAll('.faq__group-box-btn'),
    faqItemBtn = document.querySelectorAll('.faq__box-item-btn');

function openItem(item) {
    var itemContent = item.nextElementSibling,
        itemIcon = item.firstElementChild;
    itemContent.classList.contains('opened') ? itemContent.classList.remove('opened') : itemContent.classList.add('opened');
    itemIcon.classList.contains('arr-rotate') ? itemIcon.classList.remove('arr-rotate') : itemIcon.classList.add('arr-rotate');
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    var _loop = function _loop() {
        var btn = _step.value;

        btn.addEventListener('click', function () {
            openItem(btn);
        });
    };

    for (var _iterator = faqGroupBtn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    var _loop2 = function _loop2() {
        var btn = _step2.value;

        btn.addEventListener('click', function () {
            openItem(btn);
            var parentColored = btn.parentElement;
            parentColored.classList.contains('colored') ? parentColored.classList.remove('colored') : parentColored.classList.add('colored');
        });
    };

    for (var _iterator2 = faqItemBtn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop2();
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}