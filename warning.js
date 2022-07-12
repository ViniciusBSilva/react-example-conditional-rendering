/**
 * Avoid the rendering of a component
 */

/**
 * 
 * Em casos raros você pode desejar que um componente se esconda ainda que ele 
 * tenha sido renderizado por outro componente. Para fazer isso, retorne null ao 
 * invés do resultado renderizado.
 * 
 * No exemplo abaixo, o <WarningBanner /> é renderizado dependendo do valor da prop 
 * chamada warn. Se o valor da prop é false, o componente não é renderizado
 * 
 * Retornar null do método render de um componente não afeta a ativação dos métodos do 
 * ciclo de vida do componente. Por exemplo, o método componentDidUpdate ainda será chamado.
 * 
 */

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Page />,
);