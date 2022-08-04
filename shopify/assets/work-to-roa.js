const formMain = document.querySelector('#ContactForm');
const steps = formMain.querySelectorAll('.work-to-roa__step'); 
const date = new Date();

// Drag n drop variables
let files = [];

// Step variables
const nextStepBtn = document.querySelector('#next_step'); 
const prevStepBtn = document.querySelector('#prev_step'); 

formMain.addEventListener('input', evt => {
  const element = evt.target;
  let dateCustom = new Date();

  if (element.matches("input[type=date]")) {
    const mainParent = element.parentElement.parentElement;
    const [year, month, day] = element.value.split('-');
    const monthInput = mainParent.querySelector('input[name="contact[month]"]');
    const dayInput = mainParent.querySelector('input[name="contact[day]"]');
    const yearInput = mainParent.querySelector('input[name="contact[year]"]');

    yearInput.value = year;
    monthInput.value = month;
    dayInput.value = day;

    dateCustom = element.valueAsDate

  } else if (element.matches('input[name="contact[month]"]')) {
    const dateInput = element.parentElement.querySelector('.NativeDatepicker__input');

    if (element.value > 12) {
      element.value = 12;
    }
    dateCustom.setMonth(element.value - 1);

    dateInput.valueAsDate = dateCustom;

    if(element.value.length == 2) {
      element.nextElementSibling.focus();
    }
  } else if (element.matches('input[name="contact[day]"]')) {
    const dateInput = element.parentElement.querySelector('.NativeDatepicker__input');

    if (element.value > 31) {
      element.value = 31
    }
    dateCustom.setDate(element.value);
    dateInput.valueAsDate = dateCustom;

    if(element.value.length == 2) {
      element.nextElementSibling.focus();
    }
  } else if (element.matches('input[name="contact[year]"]')) {
    const dateInput = element.parentElement.querySelector('.NativeDatepicker__input');

    if (element.value > 2050) {
      element.value = 2050;
    }
    dateCustom.setFullYear(element.value);
    dateInput.valueAsDate = dateCustom;
  }
});

// Process for drag`n`drop files
function preventDefaults(evt) {
  evt.preventDefault()
  evt.stopPropagation()
};

function highlight(element) {
  element.classList.add('highlight')
};

function unhighlight(element) {
  element.classList.remove('highlight')
};

function handleFiles(data, evtElement) {
  const list = new DataTransfer();
  const filesInput = evtElement.querySelector('.work-to-roa__form-dropzone-input');
  
  Array.from(data).forEach(element => {
    list.items.add(element);
  });
  
  filesInput.files = list.files;
}

function handleDrop(evt) {
  let dt = evt.dataTransfer;
  
  Array.from(dt.files).forEach(file => {
    listFiles(file.name, evt);
  });
  
  files.push(...dt.files);
  handleFiles(files, evt.target);
}

function handleChange(evt) {
  let dt = evt.target;

  Array.from(dt.files).forEach(file => {
    listFiles(file.name, evt);
  });

  // files = [...files, ...dt.files];
  handleFiles(dt.files, evt.target.parentElement);
}

function listFiles(fileName, evt) {
  const listFilesPreviev = evt.target.parentElement.parentElement.querySelector('.work-to-roa__form-dropzone-list');
  const p = document.createElement('p');
  p.classList.add('work-to-roa__form-dropzone-list-item');
  p.dataset.name = fileName;
  p.innerHTML = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8012 0.0263672H2.52501C1.13243 0.0263672 0 1.15842 0 2.55264V18.4305C0 19.8231 1.13243 20.954 2.52501 20.954H19.8011C21.1937 20.954 22.3249 19.8231 22.3249 18.4305V2.55264C22.325 1.15842 21.1938 0.0263672 19.8012 0.0263672ZM14.4365 3.78342C15.7832 3.78342 16.8753 4.87565 16.8753 6.22226C16.8753 7.56888 15.7831 8.6611 14.4365 8.6611C13.0894 8.6611 11.9977 7.56888 11.9977 6.22226C11.9977 4.87565 13.0894 3.78342 14.4365 3.78342ZM11.1623 18.6199H19.0093C19.6829 18.6199 19.9154 18.1723 19.53 17.6199L16.8639 13.8116C16.4778 13.26 15.7806 13.2006 15.3075 13.6799L14.2779 14.7225C13.8044 15.2017 13.089 15.1562 12.6797 14.6213L8.471 9.12123C8.06168 8.58637 7.4837 8.64003 7.18043 9.24118L2.99493 17.5313C2.69129 18.1326 2.99127 18.6199 3.66484 18.6199H11.1623Z" fill="#CF3231"/></svg>
  <span>${fileName}</span>
  <span class="close">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.31557 3.99693L7.78842 1.52408C8.06165 1.25085 8.06165 0.807889 7.78842 0.535092L7.45876 0.20543C7.18545 -0.0678791 6.74249 -0.0678791 6.46969 0.20543L3.99693 2.67819L1.52408 0.204918C1.25085 -0.068306 0.807889 -0.068306 0.535092 0.204918L0.204918 0.53458C-0.068306 0.807889 -0.068306 1.25085 0.204918 1.52365L2.67819 3.99693L0.20543 6.46969C-0.0678791 6.743 -0.0678791 7.18596 0.20543 7.45876L0.535092 7.78842C0.808316 8.06165 1.25128 8.06165 1.52408 7.78842L3.99693 5.31557L6.46969 7.78842C6.743 8.06165 7.18596 8.06165 7.45876 7.78842L7.78842 7.45876C8.06165 7.18545 8.06165 6.74249 7.78842 6.46969L5.31557 3.99693Z" fill="#000001"/></svg>
  </span>`;
  listFilesPreviev.append(p);
}

function removeFile(e) {
  const element = e.target;
  let mainElement;

  if (element.matches("path") && element.parentElement.parentElement.matches(".close")) {
    mainElement = element.parentElement.parentElement;
  } else if (element.matches("svg") && element.parentElement.matches(".close")) {
    mainElement = element.parentElement;
  } else if (element.matches(".close")) {
    mainElement = element;
  };

  mainElement?.parentElement.remove();
}

const clickFiles = (evt) => {
  const element = evt.target;
  let zone;
  
  if(element.parentElement.classList.contains('work-to-roa__form-dropzone')) {
    zone = element.parentElement;
  } else if(element.parentElement.parentElement.classList.contains('work-to-roa__form-dropzone')) {
    zone = element.parentElement.parentElement;
  } else if(element.classList.contains('work-to-roa__form-dropzone')) {
    zone = element;
  }
  // files imitation click event
  zone && (() => {
    const filesInput = zone.querySelector('.work-to-roa__form-dropzone-input');
    filesInput.click();
    filesInput.addEventListener('change', handleChange);
  })();
}


// Toggle styles when mouse with cursor above drop area
['dragenter', 'dragover'].forEach(eventName => {
  formMain.addEventListener(eventName, evt => {
    const element = evt.target;
    if(element.classList.contains('work-to-roa__form-dropzone')) {
      highlight(element)
    }
  }, false)
});

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  formMain.addEventListener(eventName, evt => {
    const element = evt.target;
    if(element.classList.contains('work-to-roa__form-dropzone')) {
      preventDefaults(evt)
    }
  }, false)
});

formMain.addEventListener('drop', evt => {
  const element = evt.target;
  if(element.classList.contains('work-to-roa__form-dropzone')) {
    handleDrop(evt)
  }
}, false);

['dragleave', 'drop'].forEach(eventName => {
  formMain.addEventListener(eventName, evt => {
    const element = evt.target;
    if(element.classList.contains('work-to-roa__form-dropzone')) {
      unhighlight(element)
    }
  }, false)
});

formMain.addEventListener('click', clickFiles)

formMain.addEventListener('click', removeFile);


// Range drag 
const rangeElem = document.querySelector('.work-to-roa__form-range');
const pullElem = rangeElem.querySelector('.work-to-roa__form-range-pull');
const dragElem = pullElem.querySelector('.main');

function rebasePull(event) {
  const element = event.changedTouches ? event.changedTouches[0] : event;
  const elementPostition = Math.round(dragElem.getBoundingClientRect().x);
  const updateWidth = (pullElem.clientWidth + (Math.round(element.clientX) - elementPostition));
  const percent = rangeElem.clientWidth / 100;
  const readyPercent = Math.round(pullElem.clientWidth / percent);

  pullElem.style.width = `${updateWidth}px`;
  dragElem.dataset.value = readyPercent;

}

function moveTrigger() {
  ['touchmove', 'mousemove'].forEach(eventName => {
    rangeElem.addEventListener(eventName, rebasePull, false);
  });
}

function handlePercents() {
  const percent = rangeElem.clientWidth / 100;
  const readyPercent = Math.round(pullElem.clientWidth / percent);

  document.querySelector('#ContactForm-workload-range').value = readyPercent;
}

['mousedown', 'pointerdown'].forEach(eventName => {
  dragElem.addEventListener(eventName, moveTrigger, false);
});

['mouseup', 'pointerup'].forEach(eventName => {
  dragElem.addEventListener(eventName, () => {
    ['touchmove', 'mousemove'].forEach(eventName => {
      rangeElem.removeEventListener(eventName, rebasePull);
    });
    handlePercents();
  });
});

// Toggle steps
const toggleStepsForvard = () => {
  for (const [i, step] of steps.entries()) {
    if(step.classList.contains('active') && step.dataset.step != 4) {
      step.classList.remove('active');
      steps[i+1].classList.add('active');
      break;
    }
  }
};

const toggleStepsBack= () => {
  for (const [i, step] of steps.entries()) {
    if(step.classList.contains('active') && step.dataset.step != 1) {
      step.classList.remove('active');
      steps[i-1].classList.add('active');
      break;
    }
  }
};

nextStepBtn.addEventListener('click', toggleStepsForvard);

prevStepBtn.addEventListener('click', toggleStepsBack);