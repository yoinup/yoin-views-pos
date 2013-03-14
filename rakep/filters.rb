module Yoin

  class LessFilter < Rake::Pipeline::Web::Filters::LessFilter

    def initialize(options={}, context = nil, &block)

      super(options, context, &block)
      paths = ["#{Yoin.submodule_path}yoin-views-ipad/less/import"]
      if options[:is_android] 
        paths.push("#{Yoin.submodule_path}yoin-views/less/import-android")
      else 
        paths.push("#{Yoin.submodule_path}yoin-views/less/import-ios")
      end
      paths.push("#{Yoin.submodule_path}yoin-views/less/import")
      paths.push("#{Yoin.submodule_path}yoin-views/less/import2")

      @options = { :paths => paths }
    end

  end

end
