import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../constants/Colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  launchscreenRoot: {flex: 1, justifyContent: 'center'},
  customButton: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonText: {fontWeight: 'bold', fontSize: 20},
  textWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  customInput: {
    borderBottomWidth: 1.5,
    paddingTop: 15,
    paddingBottom: 0,
    marginTop: 10,
    height: 40,
    borderColor: colors.textGreen,
  },
  errorWrapper: {height: 'auto', marginTop: 8},
  errorColor: {color: colors.errorText},
  header: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
  },
  flexSide: {flex: 0.2},
  flexMiddle: {flex: 0.6},
  headerImages: {height: 30, width: 30},
  headerInbox: {fontSize: 30},
  card: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.primaryGreen,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {fontWeight: 'bold', fontSize: 20},
  cardName: {fontSize: 16, fontWeight: 'bold'},
  cardDesignation: {color: colors.secondaryGrey},
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    borderWidth: 1,
    backgroundColor: colors.white,
    padding: 15,
    width: Dimensions.get('window').width - 20,
  },
  filterBtn: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primaryGreen,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawerCard: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryGrey,
    marginBottom: 20,
  },
});
