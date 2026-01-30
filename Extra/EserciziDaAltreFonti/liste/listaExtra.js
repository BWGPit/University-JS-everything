/*
[0, 1, 2, 3, 4]
0 -> 4
1 -> 3
2 -> null
3 -> 2
4 -> 1
*/

function stampaLista(head) {
    console.log(`VALORE: ${head.val}\nEXTRA: ${head.extra?head.extra.val:'nihil'}\nNEXT: ${head.next?head.next.val:'nihil'}\n\n`)
    if (head.next) stampaLista(head.next)
}

function trovaPrecedente(head, nodo) {
    if (!head) return null
    if (head.next == nodo) return head
    return trovaPrecedente(head.next, nodo)
}

function trovaUltimo(head) {
    if (!head) return null
    if (!head.next) return head
    return trovaUltimo(head.next)
}

function popolaExtra(head) {
    let primo = head
    let ultimo = trovaUltimo(head)
    while (primo.val <= ultimo.val) {
        if (primo.val == ultimo.val) {
            primo.extra = null
            primo = primo.next
        }
        else {
            primo.extra = ultimo
            ultimo.extra = primo.next
            primo = primo.next
            ultimo = trovaPrecedente(head, ultimo)
        }
    }
}

function cercaK(k, head) {
    if (!head) return null
    if (head.val === k) {
        return head
    }
    if (head.extra && head.extra.val >= head.val && k < head.val) {
        return null
    }
    if (head.extra) {
        if (head.extra.val >= head.val && k > head.extra.val) return null
        return cercaK(k, head.extra)
    }
}

function main() {
    let l = {
        val: 3,
        next: {
          val: 6,
          next: {
            val: 9,
            next: {
              val: 12,
              next: {
                val: 13,
                next: null
              }
            }
          }
        }
      }
    popolaExtra(l)
    stampaLista(l)
    console.log(cercaK(9, l))
}

main()