/* 
  Eire Fitness - Early JavaScript Draft (Planning Stage)
  This is a simplified plan for interactive features that will be added later.
  Final version will include full validation and filtering logic.
*/

document.addEventListener('DOMContentLoaded', () => {
  /* 1) Mobile navigation — Shared (all)
     Planned: menu toggle for mobile screens (hamburger icon). */
  const btn = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      // Will toggle mobile menu visibility
      console.log('Mobile menu toggle planned');
    });
  }

  /* 2) Classes page filter — Kateryna
     Planned: buttons to filter the class schedule table by category. */
  const filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    console.log('Filter buttons planned');
  }

  /* 3) Form validation helpers — Shared (all)
     Planned: simple reusable validation functions for Join and Contact forms. */
  function showError() { console.log('Validation planned'); }

  /* 4) Join form — Dawid
     Planned: form for new members to submit name, email, and membership type. */
  const join = document.querySelector('#join-form');
  if (join) {
    join.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Join form validation will be added later');
    });
  }

  /* 5) Contact form — Xabier
     Planned: form for contacting the gym. Validation will be added later. */
  const contact = document.querySelector('#contact-form');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Contact form validation will be added later');
    });
  }
});
