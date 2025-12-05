function bstStampaDecrescente (t) {
    if (t) {
        bstStampaDecrescente(t.sx);
        console.log(t.val);
        bstStampaDecrescente(t.dx);
    }
}