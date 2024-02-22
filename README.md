# Typing Speed Game


## Overview

The Typing Speed Game is a web-based application designed to help users improve their typing skills by challenging them to type a given text accurately within a set time limit. The game measures the player's typing speed in words per minute and accuracy by counting correctly typed characters and words. Built with HTML, CSS, and JavaScript, this game features a clean and user-friendly interface, utilizing Bootstrap for responsive design.


## Features

**Dynamic Texts:** Each game session presents a random text to type, selected from a predefined list.

**Time Limit:** Players have 60 seconds to type as much of the text as accurately as possible.

**Score Tracking:** The game tracks the number of correctly typed characters and words, displaying the counts in real-time.

**Visual Feedback:** Typed text changes color to indicate correctness—green for correct and red for incorrect characters.

**Restart Option:** Players can restart the game at any time to try a different text or to improve their score.


## Development

It begins with selecting a random text for the player to type, then initiates a 60-second countdown timer once the game starts. As players type, their input is compared against the provided text, with visual feedback indicating accuracy. Correctly typed characters are highlighted in green, while errors are shown in red. The script also counts the number of correctly typed words and characters, updating these metrics in real-time on the screen. Event listeners on the keyboard detect typing and backspace actions, ensuring responsive gameplay. The game ends when the timer runs out, with the option to restart and try a new text. 
