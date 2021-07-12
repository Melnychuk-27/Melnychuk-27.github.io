/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const modalServiceMassage = {
  Research:
    ` Research is "creative and systematic work undertaken to increase the stock of knowledge".[1] It involves 
    the collection, organization, and analysis of information to increase understanding of a topic or issue. A 
    research project may be an expansion on past work in the field. To test the validity of instruments, 
    procedures, or experiments, research may replicate elements of prior projects or the project as a whole.
    The primary purposes of basic research (as opposed to applied research) are documentation, discovery, 
    interpretation, and the research and development (R&D) of methods and systems for the advancement of human 
    knowledge. Approaches to research depend on epistemologies, which vary considerably both within and between 
    humanities and sciences. There are several forms of research: scientific, humanities, artistic, economic,
    [citation needed] social, business, marketing, practitioner research, life, technological, etc. The scientific
    tudy of research practices is known as meta-research.`,
  Portfolio:
    ` Portfolio (from the Italian portafoglio - "portfolio") - a collection (a wide portfolio) of work performed and the 
    work of a person (company).<br>
    The term "portfolio" is borrowed through the mediation of English. portfolio in Italian (portafoglio - "portfolio"), 
    where it is formed from porta ("nose") + foglio ("sheet") [1].<br>
    The portfolio can be both on paper and electronically. The e-portfolio, in turn, can be stored locally (be accessible only 
    to a certain group of people) and globally (be available to the whole world - to users`,
  Support:
    ` Support (from English and French. Support, from late Lat. Supporto - I support) is a unit designed for fastening, 
    as well as for manual or automatic movement of a tool, for example, in machine tools.<br>
    The slide usually consists of a tool holder and slide-type intermediate parts that provide a predetermined direction of movement 
    of the tool.`,
  Documentation:
    ` Requirements documentation is the description of what a particular software does or shall do. It is used throughout development to 
    communicate how the software functions or how it is intended to operate. It is also used as an agreement or as the foundation for 
    agreement on what the software will do. Requirements are produced and consumed by everyone involved in the production of software, 
    including: end users, customers, project managers, sales, marketing, software architects, usability engineers, interaction designers, 
    developers, and testers.`,
  Development:
    `Development (also real estate development, development; from the English real estate development improvement, development of 
    real estate) is an entrepreneurial activity associated with the creation of a real estate object, reconstruction or change of an 
    existing building or land plot, leading to an increase in their value. [1]<br> In Russian practice, two versions of the term have been 
    developed: real estate development (by analogy with the English language) and a short version - development, which has the same 
    meaning.`,
  Support:
    ` Support (from English and French. Support, from late Lat. Supporto - I support) is a unit designed for fastening, 
    as well as for manual or automatic movement of a tool, for example, in machine tools.<br>
    The slide usually consists of a tool holder and slide-type intermediate parts that provide a predetermined direction of movement 
    of the tool.`,
  Design:
    ` A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, 
    or the result of that plan or specification in the form of a prototype, product or process. <br>The verb to design expresses the process 
    of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some 
    eering, coding, and graphic design) may also be considered to be a design activity.<br> The design usually has to satisfy certain goals and 
    constraints, may take into account aesthetic, functional, economic, or socio-political considerations, and is expected to interact with a 
    certain environment. Major examples of designs include architectural blueprints, engineering drawings, business processes, circuit diagrams, 
    and sewing patterns.`,
};

function serviceTemplate(titleClass) {
  const shadowImg = document.querySelector('body');
  const template = document.querySelector('#Servises-Template');
  const clone = document.importNode(template.content, true);
  for (const key in modalServiceMassage) {
    if (titleClass === key) {
      clone.querySelector('.modal').setAttribute('id', 'detail');
      clone.querySelector('.modal__subtitle').textContent = titleClass;
      clone.querySelector('.modal__descr').innerHTML = modalServiceMassage[key];
      shadowImg.appendChild(clone);
    }
  }
}
function GetClassInParent(parElement, clasName) {
  let childElement = null;
  for (let i = 0; i < parElement.parentElement.childNodes.length; i++) {
    if (parElement.parentElement.childNodes[i].className === clasName) {
      childElement = parElement.parentElement.childNodes[i];
    }
  }
  return childElement.textContent;
}
const btnReads = document.querySelectorAll('.btn__services');
if (btnReads.length > 0) {
  let titleClass = null;
  btnReads.forEach((btnRead) => {
    btnRead.addEventListener('click', () => {
      titleClass = GetClassInParent(btnRead, 'services__icon-title');
      serviceTemplate(titleClass);
      const overlay = document.querySelector('.overlay');
      const modalClose = document.querySelector('.modal__close');
      modalClose.addEventListener('click', () => {
        overlay.remove();
      });
      overlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
          overlay.remove();
        }
      });
    });
  });
}
