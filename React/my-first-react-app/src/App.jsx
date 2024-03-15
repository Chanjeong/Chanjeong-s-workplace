import './App.css';
import Avatar from './Avatar.jsx';

function Card({ children }) {
    return (
        <div className="card">
            <div className="card-content">{children}</div>
        </div>
    );
}
export default function Profile() {
    return (
        <Card>
            <Avatar
                title={'Photo'}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lhm',
                }}
                size={70}
            />
            <Avatar
                title={'About'}
                about={
                    'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
                }
            />
        </Card>
    );
}

/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>*/
