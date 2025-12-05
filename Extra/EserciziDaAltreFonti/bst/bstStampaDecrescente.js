function bstStampaDecrescente (t) {
    if (t) {
        bstStampaDecrescente(t.dx);
        console.log(t.val);
        bstStampaDecrescente(t.sx);
    }
}