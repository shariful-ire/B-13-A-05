const verify="adminadmin123"; // verify usernaem and password

document.getElementById("login").addEventListener('click', function(){
    const username=document.getElementById("username").value;
    const passward=document.getElementById("password").value;
    const cheeck = username+passward;
    if(verify===cheeck){
        window.location.href="./issue_tracker.html";
    }
    else{
        alert("Wrong Username or Passward");
    }

});

// All Elements
const cardContainer = document.getElementById('card');
const issueTextContainer= document.getElementById('issue-text');
const searchInput=document.querySelector('input[type="text"]');
const searchBtn =document.querySelector('.btn-primary');
const allBtn =document.getElementById('all');
const openBtn =document.getElementById('open');
const closedBtn =document.getElementById('closed');
let allIssues = [];

const setActiveBtn =(active)=>{
    [allBtn, openBtn, closedBtn].forEach(btn => {
        btn.classList.replace('btn-primary', 'btn-ghost');
    });
    document.getElementById(active).classList.replace('btn-ghost', 'btn-primary');
};

const showLoading = () =>{
    cardContainer.innerHTML = `<div class="col-span-full text-center p-10"><span class="loading loading-spinner loading-lg text-primary"></span><p class="mt-2">Loading Issues...</p></div>`;
};

const getLabelClass = (label)=> {
    const l = label.toUpperCase();
    if (l.includes('BUG')) return 'text-red-600 border-red-200 bg-red-50';
    if (l.includes('ENHANCEMENT') || l.includes('GOOD FIRST') || l.includes('DOCS') || l.includes('DOCUMENTATION')) return 'text-green-600 border-green-200 bg-green-50';
    if (l.includes('HELP')) return 'text-amber-600 border-amber-200 bg-amber-50';
    return 'text-gray-600 border-gray-200 bg-gray-50';
};

const getPriorityClass = (p) =>{
    const priority = p.toUpperCase();
    if (priority === 'HIGH') return 'bg-red-100 text-red-600';
    if (priority === 'MEDIUM') return 'bg-yellow-100 text-yellow-600';
    if (priority === 'LOW') return 'bg-green-100 text-green-600';
    return 'bg-gray-100 text-gray-600';
};

const formatDate = (d) =>{
    const date = new Date(d);
    return `${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()}`;
};
