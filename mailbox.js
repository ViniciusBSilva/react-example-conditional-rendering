/** 
 * Inline "IF" with Logical Operator "&&"
*/

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>

            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Mailbox unreadMessages={messages} />
);

/**
 *
 * Isto funciona porque em JavaScript, true && expressão são sempre avaliadas
 * como expressão, e false && expressão são sempre avaliadas como false.
 *
 * Portanto, se a condição é true, o elemento logo depois do && irá aparecer no resultado.
 * Se o elemento é false, React irá ignora-lo.
 *
 * Observe que retornar uma expressão falsa ainda fará com que o elemento após && seja
 * pulado, mas retornará a expressão falsa. No exemplo abaixo, <div>0</div> será retornado
 * pelo método de renderização.
 *
 */

//  render() {
//     const count = 0;
//     return (
//       <div>
//         { count && <h1>Messages: {count}</h1>}
//       </div>
//     );
//   }
