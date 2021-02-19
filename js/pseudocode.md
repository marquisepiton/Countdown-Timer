# Countdown Timer

# Objective

For this program the user will be able to display a countdown timer in digital clock format.

**Time Format:**

HOUR:MINUTE:SECOND

**General Steps**

1. User opens the page and page should show a clock (Not the start of the program.)
2. User inputs the exact time he want the timer to have. 
3. START: The user hits start. 
4. The timer's time value will go down every second.
5. When the timer reaches zero, Alarm will go off. 
6. User hits the button to turn off the alarm.
7. END: The time resets to step 1


**Event(Not in order)**

    **Basic Event:**
    
    - When the user opens the page: Displays the timer but no function is executed. 
    - When the user refreshes the page:Refreshes the page, Displays the timer , but no function will be execute. If the user executed the program before refreshing the page,then everything will reset. 
    - When the user hits start: The program starts.
    - When the user hits stop: The program stops but doesn't reset (pause). 
    - When the user hits reset: Everything stops and resets to step.

    **Feature Events:**


    **Troubleshoot Events:** 
    - What if the user loses connection: Nothing should happen 


**Objects**

- The Timer 
- Time :
    - Hour
    - Minutes
    - Seconds
- Date:
    - Months
    - Days 
    - Year
- setInterval
- EventListers (Buttons):
    - Start
    - Stop
    - Reset / Set

**Functions(Not in order.)**



```
FUNCTION: Display the timer: 
    SET: The Date Object 
    Get: The current Timer
    DISPLAY: Current time on the Screen. 

```
```
FUNCTION: Display the Date: 
    Set: The Date Object
    Get: The current Date
    Display: Current Date on the screen. 
```



```
FUNCTION: Decrease time on the timer: 
    FOR: Every second on the timer: 
        decrement one second down on the timer

```
```
FUNCTION: Start the timer: 
    Input: Timer the user wants to set 
    Input: Date the user wants to set // This may just be a additional feature


    IF: The user hits start Then the program starts THEN: 
        START: The function Display the timer

```
```

FUNCTION: pause the timer at currents state:
    IF: User hit the pause button THEN:
        pause the timer at the current time

    ELSE: User hit the pause button and the timer is already paused THEN:
        Continue the timer's clock.
```


```
FUNCTION: Set Interval with the parameter being ("Display the timer", 1000 milliseconds) // I may put this in a variable. 
```
```
FUNCTION: SET Interval with the parameter being ("Display the Date, 84,400,400s)
```

```
FUNCTION: RESET THE TIMER: 
    //This function will listen for the button click. 

    IF: The user clicks the Stop button THEN:
        CLEAR Interval (The parameter will be Set Interval)
```

**END**




