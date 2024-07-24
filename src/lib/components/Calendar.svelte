<script>
    import { format, getDaysInMonth, startOfMonth, addDays, parseISO, getDate } from 'date-fns';
    export let data;
     
    let date = new Date();
    export let year = new Date().getFullYear();
    export let month = new Date().getMonth();
    
    let days = [];
    
    const sessions = data.sessions;
  
    function getSessionsForDate(date) {
      // Convert the date to the format 'yyyy-MM-dd' for comparison
      const formattedDate = format(date, 'yyyy-MM-dd');
      return sessions.filter(session => format(parseISO(session.date), 'yyyy-MM-dd') === formattedDate);
    }

    let sessionClicked = false
    function sessionClick(e){
        console.log("before:", sessionClicked)
        sessionClicked = !sessionClicked
        console.log("after:", sessionClicked)
    
        if(sessionClicked){
            e.target.style.backgroundColor="red"
            e.target.style.padding="0px 6px"
            e.target.style.borderRadius="50%"

        }else{
            e.target.style.backgroundColor=""
            e.target.style.padding=""
            e.target.style.borderRadius=""
        }
       
        
    }
    
    function generateDays(year, month) {
      const start = startOfMonth(new Date(year, month));
      const daysInMonth = getDaysInMonth(start);
      let daysArray = [];
  
      for (let i = 0; i < daysInMonth; i++) {
        let day = addDays(start, i);
        daysArray.push({
          date: day,
          sessions: getSessionsForDate(day) // Get sessions for each day
        });
      }
      return daysArray;
    }
    
    $: days = generateDays(year, month);
  </script>
  
  <style>
    .session {
      margin-top: 5px;
      padding: 3px 8px;
      border-radius: 9px;
      font-size: 11px;
      font-weight: bold;
      
    }
    .IM { 
      color: green;
      background-color: rgba(0, 128, 0, 0.276);
    }
    .BG { 
      color:rgb(255, 64, 0);
      background-color: rgba(255, 166, 0, 0.242); 
    }
    /* Add styles for other types */
  </style>
  
  <section class="flex bg-orange-500 flex-col w-[560px] p-[10px] rounded-xl">
    <div class="font-semibold text-xl">{format(date, 'MMMM')} {format(date, 'yyyy')}</div>
    <hr class='my-4 shadow-1 mx-[-10px]'>
  
    <div class='grid grid-cols-7 place-items-center text-gray-700 font-semibold mx-[-10px] mb-[20px]'>
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>
    <div class="grid mx-[-10px] grid-cols-7 gap-[5px] place-items-top font-semibold">
      {#each days as { date, sessions }}
        <div class="flex border cursor-pointer flex-col items-center p-[5px] text-center font-semibold">
          <span on:click={sessionClick} >{format(date, 'd')}</span>
          
          {#each sessions as session}
            <div class={`text-[10px] font-bold px-2 rounded-md session ${session.type}`}>
              {session.type}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
  