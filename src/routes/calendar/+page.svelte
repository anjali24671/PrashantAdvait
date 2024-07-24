<script>
    import { onMount } from 'svelte';
    import { format, getDaysInMonth, startOfMonth, addDays } from 'date-fns';
    
    let date = new Date()
    export let year = new Date().getFullYear();
    export let month = new Date().getMonth();
  
    let days = [];
    
    const sessions = [
      { date: '2024-07-01', type: 'IM', name:'' },
      { date: '2024-07-04', type: 'BP', name:'' },
      // Add more session data here
    ];
  
    function getSessionsForDate(date) {
      return sessions.filter(session => session.date === format(date, 'yyyy-MM-dd'));
    }
  
    function generateDays(year, month) {
      const start = startOfMonth(new Date(year, month));
      const daysInMonth = getDaysInMonth(start);
      let daysArray = [];

      for (let i = 0; i < daysInMonth; i++) {
        let day = addDays(start, i);
        daysArray.push({
          date: day,
          sessions: getSessionsForDate(day),
        });
      }
      return daysArray;
    }
  
    $: days = generateDays(year, month);
  </script>
  
  <style>

    .session {
      margin-top: 5px;
      padding: 3px;
      border-radius: 3px;
      font-size: 0.8rem;
      background-color: red;
    }
    .IM { 
       color: green;
       background-color: rgba(0, 128, 0, 0.276);
    }
    .BP { background-color: cyan; }
    /* Add styles for other types */
  </style>
  


<section class="flex  flex-col w-[560px] p-[10px] rounded-xl ">

  <div class="font-semibold text-xl">{format(date, 'MMMM')} {format(date, 'yyyy')}</div>
  <hr class='my-4 mx-[-10px]'>

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
      <div class="flex flex-col items-center p-[5px] text-center font-semibold">
        <span>{format(date, 'd')}</span>

        {#each sessions as session}
          <div class={`text-[10px] font-bold px-2 rounded-md ${session.type}`}>{session.type}</div>
        {/each}

      </div>
    {/each}
  </div>
</section>

  