export const actionTypes = {
  CITYSTATE: '[URL LOCAL] url location'
}
export function setLocationState(userLocal) {
  return{
    type: actionTypes.CITYSTATE,
    payload: userLocal
  }

}