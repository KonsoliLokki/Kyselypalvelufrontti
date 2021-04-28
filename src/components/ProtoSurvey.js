import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function ProtoSurvey() {
  return (
    <div>
      <h1>Proto - Ruokala kysely PVM</h1>
Valitse toimipiste:
      <Select placeholder=''>
        <MenuItem>Pasila</MenuItem>
        <MenuItem>Porvoo</MenuItem>
        <MenuItem>Malmi</MenuItem>
      </Select>

      <br></br>
Kysymykset:<br></br>
1.Piditkö tämän päivän ruuista? <br></br>
      <div>
        <input type="radio" id="scales" name="scales" />
        <label for="scales">Maukasta!</label>
      </div>

      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="horns">Hyvää</label>
      </div>
      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="horns">Ihan ok</label>
      </div>
      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="horns">Ei maistunut :(</label>
      </div>
      <br></br>
2.Mitä ruokaa toivoisit enemmän ja mistä et niin pidä?<br></br>
      <input type='text'></input><br></br>
3.Miten tyytyväinen olit palvelun sujuvuuteen?<br></br>
      <input type='text'></input><br></br>
4.Kuinka usein syöt ruokalassa? <br></br>
      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="usein">3-5 kertaa/vko</label>
      </div>
      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="joskus">1-3 kertaa/vko</label>
      </div>
      <div>
        <input type="radio" id="horns" name="horns" />
        <label for="harvoin">harvemmin</label>
      </div>
      <br></br>
5.Onko hinta laatusuhde mielestäsi sopiva?<br></br>
      <select id="hinta laatusuhde">
        <option value="">--Valise vaihtoehdoista--</option>
        <option value="ei">Ei</option>
        <option value="kyllä">Kyllä</option>
      </select> <br></br>
6. Kun söin, otin seuraavat ruuat:
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="usein">Alkuruoka</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="joskus">Pääruoka</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="harvoin">Jälkiruoka</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="harvoin">Leipä</label>
      </div>
      <div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="harvoin">Salaatti</label>
      </div>
      <br></br>


    </div>
  )
}

export default ProtoSurvey;