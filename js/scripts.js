'use strict';

(function (window, $) {
    $(function () {
        var $header = $('.carousel-item');
        var $culturalSecion = $(".cultural .row");
        var $sidenav = $('.sidenav');
        var $aside = $("aside");
        var $mainHeader = $('.main-header');
        var headerDim = function headerDim() {
            $header.height(window.innerHeight);
        };

        headerDim();

        // heading adjectment
        function SectionHeading() {
            $('.label').each(function (i, el) {
                var $el = $(el);
                if (i !== 0) $el.width($el.siblings('h2').width());
            });
        }

        SectionHeading();
        // adding skew img line
        $('.skew-holder').parent().append(function (_) {
            return $('<div class="skew-border-top"></div><div class="skew-border-bottom"></div>');
        });
        var borderAdjust = function borderAdjust() {
            var sectionsPadding = +$('.support').css("padding").slice(0, 2);
            $(".skew-border-top").each(function (i, el) {
                var distanse = $(el).parent().find('.img-fluid').height() / 4;
                var height = $(el).parentsUntil("section").eq(1).height() / 2 + sectionsPadding / 2;
                if (window.innerWidth > 765) {
                    $(el).height(height - distanse);
                } else {
                    $(el).height(Math.max(height / 2 - 2 * distanse, 30));
                }

                $(el).siblings().filter(".skew-border-bottom").height(height - distanse);
            });
        };
        borderAdjust();
        // the cultural
        // const mapAdjustion = () => {
        //     if (window.innerWidth > 765) {
        //         $culturalSecion.height(Math.min(200 + $(".cultural .map img").height(), 400));
        //     } else {
        //         $culturalSecion.height("auto");
        //     }
        //     borderAdjust();
        // };
        // called by window resize event
        var switchSize = function switchSize() {
            // mapAdjustion();
            headerDim();
            SectionHeading();
            if (window.innerWidth > 765) {
                // disk top
                if (!$mainHeader.hasClass('hidden')) {
                    $mainHeader.addClass('hidden');
                    $sidenav.removeClass("nano");
                    $(".brand-holder").append($(".brand-heading"));
                }
            } else {
                $mainHeader.removeClass("hidden");
                $sidenav.addClass("nano");
                $mainHeader.find(".brand").append($('.brand-heading'));
            }
        };

        switchSize();

        $(window).on('resize', switchSize);

        var toggleSidNav = function toggleSidNav(e) {
            e.preventDefault();
            if ($aside.hasClass("active")) {
                $aside.removeClass("active");
                return;
            }
            $aside.addClass("active");
        };
        // mapAdjustion();
        $('.nav-toggle').on('click', toggleSidNav);
        //scroll down
        $('.scroll-down a').on('click', function (e) {
            e.preventDefault();
            $(".content").animate({
                scrollTop: $(window).height()
            }, 1000);
        });

        // resize on last img load
        $("img").eq(-1).on("load", function () {
            switchSize();
            console.log('from load');
        });
    });
})(window, jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsIiRoZWFkZXIiLCIkY3VsdHVyYWxTZWNpb24iLCIkc2lkZW5hdiIsIiRhc2lkZSIsIiRtYWluSGVhZGVyIiwiaGVhZGVyRGltIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJTZWN0aW9uSGVhZGluZyIsImVhY2giLCJpIiwiZWwiLCIkZWwiLCJ3aWR0aCIsInNpYmxpbmdzIiwicGFyZW50IiwiYXBwZW5kIiwiYm9yZGVyQWRqdXN0Iiwic2VjdGlvbnNQYWRkaW5nIiwiY3NzIiwic2xpY2UiLCJkaXN0YW5zZSIsImZpbmQiLCJwYXJlbnRzVW50aWwiLCJlcSIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4IiwiZmlsdGVyIiwic3dpdGNoU2l6ZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm9uIiwidG9nZ2xlU2lkTmF2IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNsQkEsTUFBRSxZQUFZO0FBQ1YsWUFBTUMsVUFBVUQsRUFBRSxnQkFBRixDQUFoQjtBQUNBLFlBQU1FLGtCQUFrQkYsRUFBRSxnQkFBRixDQUF4QjtBQUNBLFlBQU1HLFdBQVdILEVBQUUsVUFBRixDQUFqQjtBQUNBLFlBQU1JLFNBQVNKLEVBQUUsT0FBRixDQUFmO0FBQ0EsWUFBTUssY0FBY0wsRUFBRSxjQUFGLENBQXBCO0FBQ0EsWUFBTU0sWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEJMLG9CQUFRTSxNQUFSLENBQWVSLE9BQU9TLFdBQXRCO0FBQ0gsU0FGRDs7QUFJQUY7O0FBRUE7QUFDQSxpQkFBU0csY0FBVCxHQUEwQjtBQUN0QlQsY0FBRSxRQUFGLEVBQVlVLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFJQyxFQUFK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QUFvQmtDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVFLENBQVYsRUFBYTtBQUN6Q0EsY0FBRUMsY0FBRjtBQUNBckMsY0FBRSxVQUFGLEVBQWNzQyxPQUFkLENBQXNCO0FBQ2xCQywyQkFBV3ZDLEVBQUVELE1BQUYsRUFBVVEsTUFBVjtBQURPLGFBQXRCLEVBRUcsSUFGSDtBQUdILFNBTEQ7O0FBUUE7QUFDQVAsVUFBRSxLQUFGLEVBQVN5QixFQUFULENBQVksQ0FBQyxDQUFiLEVBQWdCUyxFQUFoQixDQUFtQixNQUFuQixFQUEyQixZQUFZO0FBQ25DSjtBQUNBVSxvQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDSCxTQUhEO0FBSUgsS0FsR0Q7QUFtR0gsQ0FwR0QsRUFvR0cxQyxNQXBHSCxFQW9HVzJDLE1BcEdYIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHdpbmRvdywgJCkge1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJGhlYWRlciA9ICQoJy5jYXJvdXNlbC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgJGN1bHR1cmFsU2VjaW9uID0gJChcIi5jdWx0dXJhbCAucm93XCIpO1xyXG4gICAgICAgIGNvbnN0ICRzaWRlbmF2ID0gJCgnLnNpZGVuYXYnKTtcclxuICAgICAgICBjb25zdCAkYXNpZGUgPSAkKFwiYXNpZGVcIik7XHJcbiAgICAgICAgY29uc3QgJG1haW5IZWFkZXIgPSAkKCcubWFpbi1oZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJEaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRoZWFkZXIuaGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoZWFkZXJEaW0oKTtcclxuXHJcbiAgICAgICAgLy8gaGVhZGluZyBhZGplY3RtZW50XHJcbiAgICAgICAgZnVuY3Rpb24gU2VjdGlvbkhlYWRpbmcoKSB7XHJcbiAgICAgICAgICAgICQoJy5sYWJlbCcpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICRlbC53aWR0aCgkZWwuc2libGluZ3MoJ2gyJykud2lkdGgoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZWN0aW9uSGVhZGluZygpO1xyXG4gICAgICAgIC8vIGFkZGluZyBza2V3IGltZyBsaW5lXHJcbiAgICAgICAgJCgnLnNrZXctaG9sZGVyJykucGFyZW50KClcclxuICAgICAgICAgICAgLmFwcGVuZChfID0+ICQoYDxkaXYgY2xhc3M9XCJza2V3LWJvcmRlci10b3BcIj48L2Rpdj48ZGl2IGNsYXNzPVwic2tldy1ib3JkZXItYm90dG9tXCI+PC9kaXY+YCkpO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckFkanVzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnNQYWRkaW5nID0gKyQoJy5zdXBwb3J0JykuY3NzKFwicGFkZGluZ1wiKS5zbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgJChcIi5za2V3LWJvcmRlci10b3BcIikuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5zZSA9ICQoZWwpLnBhcmVudCgpLmZpbmQoJy5pbWctZmx1aWQnKS5oZWlnaHQoKSAvIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gJChlbCkucGFyZW50c1VudGlsKFwic2VjdGlvblwiKS5lcSgxKS5oZWlnaHQoKSAvIDIgKyBzZWN0aW9uc1BhZGRpbmcgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5oZWlnaHQoaGVpZ2h0IC0gZGlzdGFuc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLmhlaWdodChNYXRoLm1heChoZWlnaHQgLyAyIC0gMiAqIGRpc3RhbnNlLCAzMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbCkuc2libGluZ3MoKS5maWx0ZXIoXCIuc2tldy1ib3JkZXItYm90dG9tXCIpLmhlaWdodChoZWlnaHQgLSBkaXN0YW5zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvcmRlckFkanVzdCgpO1xyXG4gICAgICAgIC8vIHRoZSBjdWx0dXJhbFxyXG4gICAgICAgIC8vIGNvbnN0IG1hcEFkanVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY1KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkY3VsdHVyYWxTZWNpb24uaGVpZ2h0KE1hdGgubWluKDIwMCArICQoXCIuY3VsdHVyYWwgLm1hcCBpbWdcIikuaGVpZ2h0KCksIDQwMCkpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgJGN1bHR1cmFsU2VjaW9uLmhlaWdodChcImF1dG9cIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgYm9yZGVyQWRqdXN0KCk7XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjYWxsZWQgYnkgd2luZG93IHJlc2l6ZSBldmVudFxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG1hcEFkanVzdGlvbigpO1xyXG4gICAgICAgICAgICBTZWN0aW9uSGVhZGluZygpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpc2sgdG9wXHJcbiAgICAgICAgICAgICAgICBpZiAoISRtYWluSGVhZGVyLmhhc0NsYXNzKCdoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtYWluSGVhZGVyLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2lkZW5hdi5yZW1vdmVDbGFzcyhcIm5hbm9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5icmFuZC1ob2xkZXJcIikuYXBwZW5kKCQoXCIuYnJhbmQtaGVhZGluZ1wiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICRzaWRlbmF2LmFkZENsYXNzKFwibmFub1wiKTtcclxuICAgICAgICAgICAgICAgICRtYWluSGVhZGVyLmZpbmQoXCIuYnJhbmRcIikuYXBwZW5kKCQoJy5icmFuZC1oZWFkaW5nJykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN3aXRjaFNpemUoKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBzd2l0Y2hTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlU2lkTmF2ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGFzaWRlLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkYXNpZGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGFzaWRlLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIG1hcEFkanVzdGlvbigpO1xyXG4gICAgICAgICQoJy5uYXYtdG9nZ2xlJykub24oJ2NsaWNrJywgdG9nZ2xlU2lkTmF2KTtcclxuICAgICAgICAvL3Njcm9sbCBkb3duXHJcbiAgICAgICAgJCgnLnNjcm9sbC1kb3duIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoXCIuY29udGVudFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCh3aW5kb3cpLmhlaWdodCgpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyByZXNpemUgb24gbGFzdCBpbWcgbG9hZFxyXG4gICAgICAgICQoXCJpbWdcIikuZXEoLTEpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaFNpemUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gbG9hZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KSh3aW5kb3csIGpRdWVyeSk7XHJcbiJdfQ==
