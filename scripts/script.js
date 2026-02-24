let interviewList = [];
let rejectedList = [];
let currrentStatus = 'all'

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');
let availableCount = document.getElementById('available-count')

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectFilterBtn = document.getElementById('reject-filter-btn')

const allCardSection = document.getElementById('all-cards')
// console.log(allCardSection.children.length);

const mainContainer = document.getElementById('main-container');
const filterSection = document.getElementById('filtered-section')
const rejectSection = document.getElementById('rejected-section')

function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
    availableCount.innerText = allCardSection.children.length;
}

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white')
    rejectFilterBtn.classList.remove('bg-blue-600', 'text-white')
    
    allFilterBtn.classList.add('bg-white', 'text-gray-600')
    interviewFilterBtn.classList.add('bg-white', 'text-gray-600')
    rejectFilterBtn.classList.add('bg-white', 'text-gray-600')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-white', 'text-gray-600')
    selected.classList.add('bg-blue-600', 'text-white')

    if(id === 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        rejectSection.classList.add('hidden');
    }
    if(id === 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        rejectSection.classList.add('hidden');
    }
    if(id === 'reject-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.add('hidden');
        rejectSection.classList.remove('hidden');
    }
}

mainContainer.addEventListener('click', function(event){
   
   
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        parentNode.querySelector('.status-btn').innerText = 'Interview'
        const companyName = parentNode.querySelector('.company-name').innerText
        const jobRole = parentNode.querySelector('.job-role').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status-btn').innerText
        const title = parentNode.querySelector('.title').innerText

   const cardInfo = {
    companyName,
    jobRole,
    salary,
    status,
    title
   }
  
   const interviewExist = interviewList.find(item => item.companyName == cardInfo.companyName)
   
   if(!interviewExist){
    interviewList.push(cardInfo);
   }

   

   renderInterview();
   calculateCount();
   }
    else if(event.target.classList.contains('reject-btn')){
        const parentNode = event.target.parentNode.parentNode;
        parentNode.querySelector('.status-btn').innerText = 'Rejected'
        const companyName = parentNode.querySelector('.company-name').innerText
        const jobRole = parentNode.querySelector('.job-role').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status-btn').innerText
        const title = parentNode.querySelector('.title').innerText

        const cardInfo = {
        companyName,
        jobRole,
        salary,
        status,
        title
        }
  
        const rejectExist = rejectedList.find(item => item.companyName == cardInfo.companyName)
        
        if(!rejectExist){
            rejectedList.push(cardInfo);
        }

        

        renderReject();
        calculateCount();
   }

   
})



function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList){
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'job-card p-6 bg-base-100 shadow-sm flex flex-row justify-between items-baseline mx-5 mt-4'
        div.innerHTML = `
                        <div class="space-y-5">
                    <div>
                        <h2 class=" company-name card-title text-xl font-semibold">${interview.companyName}</h2>
                        <p class="job-role text-xl text-gray-500">${interview.jobRole}</p>
                    </div>
                    <div>
                        <p class="salary text-gray-500">${interview.salary}</p>
                        </div>
                    <div class="space-y-2">
                        <button class="status-btn btn btn-soft rounded-xs">${interview.status}</button>
                        <p class="title">${interview.title}</p>
                    </div>
                    <div class="justify-baseline card-actions">
                        <button class="interview-btn btn btn-primary btn-outline btn-success">Interview</button>
                        <button class="reject-btn btn btn-primary btn-outline btn-error">Rejected</button>
                    </div>
                </div>
                <div class="right">
                        <button class="btn btn-circle"><span><i class="fa-regular fa-trash-can"></i></span></button>
                </div>
        `
        filterSection.appendChild(div)
    }
    
}

function renderReject(){
    rejectSection.innerHTML = ''

    for(let reject of rejectedList){
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'job-card p-6 bg-base-100 shadow-sm flex flex-row justify-between items-baseline mx-5 mt-4'
        div.innerHTML = `
                        <div class="space-y-5">
                    <div>
                        <h2 class=" company-name card-title text-xl font-semibold">${reject.companyName}</h2>
                        <p class="job-role text-xl text-gray-500">${reject.jobRole}</p>
                    </div>
                    <div>
                        <p class="salary text-gray-500">${reject.salary}</p>
                        </div>
                    <div class="space-y-2">
                        <button class="status-btn btn btn-soft rounded-xs">${reject.status}</button>
                        <p class="title">${reject.title}</p>
                    </div>
                    <div class="justify-baseline card-actions">
                        <button class="interview-btn btn btn-primary btn-outline btn-success">Interview</button>
                        <button class="reject-btn btn btn-primary btn-outline btn-error">Rejected</button>
                    </div>
                </div>
                <div class="right">
                        <button class="btn btn-circle"><span><i class="fa-regular fa-trash-can"></i></span></button>
                </div>
        `
        rejectSection.appendChild(div)
    }
    
}


calculateCount();