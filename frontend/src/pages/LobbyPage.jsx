import React from 'react'

const LobbyPage = () => {
  return (
    <div className="lobby">
        <main id="lobby-container">
            <div id="form-container">
                <div id="form__container__header">
                    <p>👋 Create OR Join a Room</p>
                </div>

                <div id="form__content__wrapper">
                    <form id="join-form">
                        <input type="text" name="invite_link" required/>
                        <input type="submit" value="Join Room" />
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default LobbyPage