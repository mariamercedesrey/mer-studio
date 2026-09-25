// Project Detail overlay: opens from Selected Work, mirrors /work/<slug> in the URL,
// closes on the close button, Esc or browser Back. Without JS the links go to the prerendered page.
export function initProjectOverlay() {
  const dialogs = new Map<string, HTMLDialogElement>();
  document.querySelectorAll<HTMLDialogElement>('[data-project-dialog]').forEach((d) => {
    dialogs.set(d.dataset.projectDialog!, d);
  });
  if (!dialogs.size) return;

  const homeUrl = location.pathname + location.search;
  let opener: HTMLElement | null = null;

  const open = (id: string, push: boolean) => {
    const dialog = dialogs.get(id);
    if (!dialog || dialog.open) return;
    dialog.scrollTop = 0;
    dialog.showModal();
    if (push) history.pushState({ project: id }, '', `/work/${id}/`);
  };

  const close = (dialog: HTMLDialogElement, fromHistory: boolean) => {
    if (!dialog.open) return;
    dialog.close();
    if (!fromHistory && history.state?.project) history.back();
    opener?.focus({ preventScroll: true });
  };

  document.querySelectorAll<HTMLAnchorElement>('[data-project-open]').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      // Only the active (focused) item opens, matching the editorial activation model.
      const item = link.closest('[data-work-item]');
      if (item && !item.hasAttribute('data-active')) { e.preventDefault(); return; }
      e.preventDefault();
      opener = link;
      open(link.dataset.projectOpen!, true);
    });
  });

  dialogs.forEach((dialog) => {
    dialog.querySelectorAll('[data-project-close]').forEach((btn) =>
      btn.addEventListener('click', () => close(dialog, false)),
    );
    // Esc: let our close() handle history.
    dialog.addEventListener('cancel', (e) => { e.preventDefault(); close(dialog, false); });
  });

  window.addEventListener('popstate', (e) => {
    const id = (e.state as { project?: string } | null)?.project;
    if (id) open(id, false);
    else dialogs.forEach((d) => close(d, true));
  });

  // Keep a clean base entry so Back from the overlay returns to the home page.
  if (!history.state) history.replaceState(null, '', homeUrl);
}
