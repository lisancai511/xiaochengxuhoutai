// pages/kemuOne/index.js
import { getKeyFromStorage } from '../../utils/util';
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  gotoSubject: function(type) {
    switch (type.currentTarget.id) {
      case 'collection':
        const collection = getKeyFromStorage('collectionIds') || {};
        const ids = Object.keys(collection);
        if (ids.length) {
          wx.navigateTo({
            url: `/pages/collection/index?type=collectionOne`,
          });
        } else {
          wx.showToast({
            icon: 'none',
            title: '暂无收藏',
            duration: 1000,
          });
        }
        break;

      default:
        wx.navigateTo({
          url: `/pages/exercise/exercise?type=${type.currentTarget.id}`,
        });
        break;
    }
  },
});