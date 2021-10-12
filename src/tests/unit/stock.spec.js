import Stock from '../../components/stocks/Stock';

import { createLocalVue, mount } from '@vue/test-utils'

describe('Stock', () => {
  const localVue = createLocalVue()

  const wrapper = mount(Stock, {
    localVue,
    propsData: {
      stock: {
        id: 1,
        price: 100,
        quantity: 1
      }
    }
  })

  const stock = {
    id: 1,
    price: 100,
    quantity: 1
  }

  it('renders correctly with props', () => {
    expect(
      wrapper.props().stock
    ).toStrictEqual(stock)
  })

  it('sets the correct default data', () => {
    expect(typeof Stock.data).toBe('function');
    const defaultData = Stock.data();
    expect(defaultData.quantity).toBe(0);
  })

  it('receive new order and buy stock', () => {
    expect(typeof Stock.methods.buyStock).toBe('function');
  })
})