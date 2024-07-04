<script>
    import { onMount } from 'svelte';
    import { format, getDaysInMonth, startOfMonth, addDays } from 'date-fns';
    
    export let year = new Date().getFullYear();
    export let month = new Date().getMonth();
  
    let days = [];
    
    const sessions = [
      { date: '2024-06-01', type: 'IM' },
      { date: '2024-06-04', type: 'BP' },
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
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }
    .day {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
    .session {
      margin-top: 5px;
      padding: 3px;
      border-radius: 3px;
      font-size: 0.8rem;
    }
    .IM { background-color: yellow; }
    .BP { background-color: cyan; }
    /* Add styles for other types */
  </style>
  
  <div class="calendar">
    {#each days as { date, sessions }}
      <div class="day">
        <span>{format(date, 'd')}</span>
        {#each sessions as session}
          <div class={`session ${session.type}`}>{session.type}</div>
        {/each}
      </div>
    {/each}
  </div>
  