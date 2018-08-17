// Packages
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'
import AlliesList from '../../../config/allies.json'

const Allies = () => (
  <section className="x:pad-bt-20 bg-grey-50 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Algunos aliados de Kodemi<Cursor>a</Cursor>
          </h2>
        </div>
      </div>
      <div className="line">
        <div>
          {AlliesList.map((ally, i) => (
            <div
              key={i}
              className="x:scol-6 s:scol-4 l:scol-3 x:center s:pad-lr-20 m:pad-lr-30"
            >
              <img
                className="img-liquid"
                src={asset(ally.asset)}
                alt={ally.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Allies
