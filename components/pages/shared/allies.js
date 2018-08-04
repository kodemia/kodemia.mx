// Packages
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'
import AlliesList from '../../../config/allies.json'

const Allies = () => (
  <section className="scontainer x:pad-bt-20 s:pad-bt-40">
    <div className="line x:center">
      <div className="x:scol-12 x:mrg-bottom-20">
        <h2>
          Algunos aliados de Kodemi<Cursor>a</Cursor>
        </h2>
      </div>
    </div>
    <div className="line x:center">
      <div>
        {AlliesList.map((ally, i) => (
          <div key={i} className="x:scol-6 s:scol-4 m:scol-3">
            <img
              className="x:middle"
              width="150"
              src={asset(ally.asset)}
              alt={ally.name}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Allies
